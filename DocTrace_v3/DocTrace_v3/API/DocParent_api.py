

from pyramid.view import view_config
from DocTrace_v3.BLL.Doc_Parent import BLL_Doc_Parent
from pyramid.request import Request
from pyramid.response import Response
from pyramid.view import view_config

#
# @view_config(route_name='documents_api',
#              request_method='GET',
#              accept='application/json',
#              renderer='json')
# def all_documents(_):
#     doc_parent = BLL_Doc_Parent.get_doc_parent_by_doc_id()
#
#     return doc_parent


@view_config(route_name='document_parent_api',
             request_method='GET',
             renderer='json')
def single_document_parent(request: Request):
    doc_id = request.matchdict.get('doc_id')
    doc_parent = BLL_Doc_Parent.get_doc_parent_by_doc_id(doc_id)

    return doc_parent
