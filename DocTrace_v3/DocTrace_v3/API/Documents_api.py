

from pyramid.view import view_config
from DocTrace_v3.BLL.Documents import BLL_Documents
from pyramid.request import Request
from pyramid.response import Response
from pyramid.view import view_config


@view_config(route_name='documents_api',
             request_method='GET',
             accept='application/json',
             renderer='json')
def all_documents(_):
    docs = BLL_Documents.get_documents()

    return docs


@view_config(route_name='document_api',
             request_method='GET',
             renderer='json')
def single_document(request: Request):
    doc_id = request.matchdict.get('doc_id')
    doc = BLL_Documents.single_document(doc_id)

    return doc

@view_config(route_name='documents_api',
             request_method='POST')
def create_document(request: Request):
    doc_data = request.json_body
    doc_id = BLL_Documents.create_document(doc_data)

    return Response(status=200, body=doc_id)


@view_config(route_name='document_api',
             request_method='PUT')
def update_document(request: Request):
    doc_id = request.matchdict.get('doc_id')
    doc_data = request.json_body
    r = BLL_Documents.update_document(doc_id,doc_data)

    return Response(status=200, body=r)


