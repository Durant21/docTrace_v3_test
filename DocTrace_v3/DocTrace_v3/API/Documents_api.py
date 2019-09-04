

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
def single_document_by_id(request: Request):
    doc_id = request.matchdict.get('doc_id')
    doc = BLL_Documents.single_document(doc_id)

    return doc


@view_config(route_name='document2_api',
             request_method='GET',
             renderer='json')
def single_document_by_name(request: Request):
    doc_name = request.matchdict.get('doc_name')
    doc = BLL_Documents.single_document_by_name(doc_name)

    return doc


@view_config(route_name='documents_api',
             request_method='POST')
def create_document(request: Request):
    doc_data = request.json_body
    r = BLL_Documents.create_document(doc_data)

    return Response(status=r["status"], body=r["msg"])


@view_config(route_name='document_api',
             request_method='PUT')
def update_document(request: Request):
    doc_id = request.matchdict.get('doc_id')
    doc_data = request.json_body
    r = BLL_Documents.update_document(doc_id,doc_data)

    return Response(status=200, body=r)


