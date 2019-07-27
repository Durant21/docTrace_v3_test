

from pyramid.view import view_config
from DocTrace_v3.BLL.Sections import BLL_Sections
from DocTrace_v3.BLL.Groups import BLL_Groups
from pyramid.request import Request
from pyramid.response import Response
from pyramid.view import view_config

#
# @view_config(route_name='groups_api',
#              request_method='GET',
#              accept='application/json',
#              renderer='json')
# def all_sections(_):
#     sections = BLL_Sections.get_sections()
#
#     return sections


@view_config(route_name='group_api',
             request_method='GET',
             renderer='json')
def single_doc_group(request: Request):
    doc_id = request.matchdict.get('doc_id')
    section = BLL_Groups.get_docs_groups(doc_id=doc_id)

    return section


#
# @view_config(route_name='sections_api',
#              request_method='POST')
# def create_section(request: Request):
#     section_data = request.json_body
#     sec_id = BLL_Sections.create_section(section_data)
#
#     return Response(status=200, body=sec_id)
#
#
# @view_config(route_name='section_api',
#              request_method='PUT')
# def update_section(request: Request):
#     sec_id = request.matchdict.get('sec_id')
#     section_data = request.json_body
#     r = BLL_Sections.update_section(sec_id,section_data)
#
#     return Response(status=200, body=r)


