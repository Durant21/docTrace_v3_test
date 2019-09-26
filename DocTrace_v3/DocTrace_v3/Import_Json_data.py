import json
from DocTrace_v3.data.db_factory import DbSessionFactory
from DocTrace_v3.BLL.Documents import BLL_Documents
from DocTrace_v3.DAL.Documents import DAL_Documents
from DocTrace_v3.BLL.DocGroupSections import BLL_DocGroupSections
# json_data = 'distros.json'
# parsed_json = (json.loads(json_data))
# print(json.dumps(parsed_json, indent=4, sort_keys=True))
#
# loaded_json = json.loads(json_data)
# for x in loaded_json:
#     print("%s: %d" % (x, loaded_json[x]))

#
# with open('distros.json', 'r') as f:
#     distros_dict = json.load(f)
#
# for distro in distros_dict:
#     print(distro['Name'])
#
# a = 1
#

def run_it():
    # with open('data1a.json', 'r') as f:
    with open('data1a.json', encoding="utf8") as f:
        relationships_dict = json.load(f)

    for rel in relationships_dict:
        r = rel['SourceName']
        t = r.split('/')
        if t:
            source_doc_name = t[len(t) - 1]
            print(source_doc_name)
            g = verify_doc_in_DB(source_doc_name)

        r = rel['TargetName']
        t = r.split('/')
        if t:
            target_doc_name = t[len(t) - 1]
            print(target_doc_name)
            g = verify_doc_in_DB(target_doc_name)

        source_doc_id = DAL_Documents.doc_by_name(doc_name=source_doc_name)
        target_doc_id = DAL_Documents.doc_by_name(doc_name=target_doc_name)
        # yy = source_doc_id.doc_id
        j_body = {"doc_id": source_doc_id.doc_id,
                   "append_doc_id": target_doc_id.doc_id}
        r = BLL_DocGroupSections.attach_sections(j_body)


def verify_doc_in_DB(doc_name):
    # get or insert into Document table
    doc = BLL_Documents.single_document_by_name(doc_name)
    if doc:
        print('found it')
    else:
        print('not there')
        doc_data = {"doc_name": doc_name}
        r = BLL_Documents.create_document(doc_data=doc_data)
        print(r)


def main():
    DbSessionFactory.global_init('myDocuments.sqlite')
    run_it()


if __name__ == "__main__":
    main()

