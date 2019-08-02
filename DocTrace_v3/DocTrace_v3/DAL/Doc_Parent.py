import sys
import csv
import os
import random

from dateutil.parser import parse

from DocTrace_v3.data.db_factory import DbSessionFactory
from DocTrace_v3.Domain.Doc_Parent import DocumentParent

class DAL_Doc_Parent:
    __section_data = {}
    #
    # @classmethod
    # def all_sections(cls,limit=None):
    #     session = DbSessionFactory.create_session()
    #     query = session.query(Section)
    #
    #     if limit:
    #         sections = query[:limit]
    #     else:
    #         sections = query.all()
    #
    #     session.close()
    #
    #     return sections
    #
    #
    # @classmethod
    # def section_by_id(cls, sec_id):
    #     session = DbSessionFactory.create_session()
    #     section = session.query(Section).filter(Section.sec_id == sec_id).first()
    #     session.close()
    #
    #     return section
    #
    # @classmethod
    # def section_by_doc(cls, doc_id):
    #     session = DbSessionFactory.create_session()
    #     section = session.query(Group).filter(Group.doc_id == doc_id).all()
    #     session.close()
    #
    #     return section

    @classmethod
    def create_doc_parent(cls,doc_parent):
        try:
            session = DbSessionFactory.create_session()

            db_doc_parent = DocumentParent()
            # db_section.sec_id = section.sec_id
            db_doc_parent.doc_id = doc_parent['doc_id']
            db_doc_parent.parent_id = doc_parent['parent_id']
            db_doc_parent.relationship = doc_parent['relationship']

            session.add(db_doc_parent)
            session.commit()

            return db_doc_parent

        except Exception as e:
            print (e)
