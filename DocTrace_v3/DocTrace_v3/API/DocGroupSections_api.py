
from pyramid.view import view_config
from DocTrace_v3.BLL.DocGroupSections import BLL_DocGroupSections
from pyramid.request import Request
from pyramid.response import Response
from pyramid.view import view_config

@view_config(route_name='doc_group_sections_api',
             request_method='POST')
def attach_sections(request: Request):
    j_body = request.json_body
    r = BLL_DocGroupSections.attach_sections(j_body)

    return Response(status=r['status'], body=r['msg'])
    # return Response(status=200, body=sec_id)

