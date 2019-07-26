# from DocTrace_v3.BLL.Groups import BLL_Groups
from DocTrace_v3.BLL.Documents import BLL_Documents
from DocTrace_v3.Domain.Documents import Document
from DocTrace_v3.data.db_factory import DbSessionFactory

from DocTrace_v3.BLL.Sections import BLL_Sections

# def test_call_groups():
#    r = BLL_Groups.get_groups()
#    return r
#
# def test_call_documents():
#    r = BLL_Documents.get_documents()
#    return r
#
# def test_doc():
#    # doc = Document('','')
#    # doc.__init__('','')
#    doc = Document()
#    doc.add_name('a doc')
#    print(doc.doc_name)
#    return doc
#
# def test_create_doc(doc_name):
#     r = BLL_Documents.create_document(doc_name=doc_name)
#     print(r)
#
def test_update_doc(doc_name):
    doc_data = {"doc_id": "1001","doc_name": "changed name2"}
    r = BLL_Documents.update_document(doc_id='1001',doc_data=doc_data)
    print(r)

def test_create_section():
    # section_data = request.json_body
    section_data = {"sec_date_in":"1/1/2019", "sec_text": "new section 1"}
    sec_id = BLL_Sections.create_section(section_data)
    print(sec_id)

    return sec_id

def test_get_all_sections():
    sections = BLL_Sections.get_sections()
    print('found sections')
    return None


def test_edit_section():
    section_data = {
        "sec_id": "77640590-7012-476f-9afc-16876bfd35fd",
        "sec_text": "new section 1a",
        "sec_date_in": "2019-01-01"
    }
    r = BLL_Sections.update_section("77640590-7012-476f-9afc-16876bfd35fd", section_data)
    print(r)

def main():
    DbSessionFactory.global_init('myDocuments.sqlite')
    # (test_call_groups())
    # test_call_documents()
    # (test_doc())
    # test_create_doc('abc')
    # test_update_doc('abc')

    # TEST SECTIONS
    # test_create_section()
    # test_get_all_sections()
    test_edit_section()

if __name__ == "__main__":
    main()


