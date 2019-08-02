
from DocTrace_v3.viewmodels.create_document_parent_viewmodel import CreateDocumentParentViewModel

from DocTrace_v3.DAL.Doc_Parent import DAL_Doc_Parent

class BLL_Doc_Parent:

    # @classmethod
    # def get_sections(cls):
    #
    #     my_sections = DAL_Sections.all_sections(limit=25)
    #
    #     return my_sections
    #
    # @classmethod
    # def single_section(cls, sec_id):
    #     section = DAL_Sections.section_by_id(sec_id=sec_id)
    #
    #     # return section
    #
    #     return {"status": "200", "msg": section}
    #
    # @classmethod
    # def get_sections_by_doc(cls, doc_id):
    #     section = DAL_Sections.section_by_doc(doc_id=doc_id)
    #
    #     # return section
    #
    #     return {"status": "200", "msg": section}

    @classmethod
    def create_doc_parent(cls, j_body):
        # TODO: Validate
        new_data = {}
        new_data.update(doc_id=j_body['doc_id'])
        new_data.update(parent_id=j_body['parent_id'])
        new_data.update(relationship=j_body['relationship'])
        vm = CreateDocumentParentViewModel(new_data)
        vm.compute_details()
        if vm.errors:
            # return "400 " + vm.error_msg
            return {"status": "400", "msg": vm.error_msg}

        try:
            doc_parent = DAL_Doc_Parent.create_doc_parent(vm.DocumentParent)
            # return Response(status=201, json_body=Document.to_dict())
            # return "201 " + Section.sec_id
            # return {"status":"201", "msg":Section.sec_id}
            # create a group
            # group_data = {"doc_id": j_body["doc_id"],
            #               "sec_id": Section.sec_id}
            # r = BLL_Groups.create_group(group_data)
            # group_id = r["msg"]

            print("created doc_parent" + doc_parent.doc_parent_id)
            return {"status": "201", "msg": doc_parent.doc_parent_id}

        except Exception as x:
            # return Response(status=400, body='Could not save car.')
            # return "400 " + "Could not save section."
            return {"status": "400", "msg": "Could not save doc_parent record."}

