import sys
import csv
import os
import random

from dateutil.parser import parse

from DocTrace_v3.data.db_factory import DbSessionFactory
from DocTrace_v3.Domain.Sections import Section

class DAL_Sections:
    __section_data = {}

    @classmethod
    def all_sections(cls,limit=None):
        session = DbSessionFactory.create_session()
        query = session.query(Section)

        if limit:
            sections = query[:limit]
        else:
            sections = query.all()

        session.close()

        return sections


    @classmethod
    def section_by_id(cls, sec_id):
        session = DbSessionFactory.create_session()
        section = session.query(Section).filter(Section.sec_id == sec_id).first()
        session.close()

        return section

    @classmethod
    def add_section(cls,section):
        try:
            session = DbSessionFactory.create_session()

            db_section = Section()
            db_section.doc_id = section.doc_id
            db_section.doc_name = section.doc_name

            session.add(section)
            session.commit()

            return db_section

        except Exception as e:
            print (e)

    @classmethod
    def update_section(cls, section_data):
        session = DbSessionFactory.create_session()

        db_section = session.query(Section).filter(Section.sec_id == section_data.sec_id).first()
        db_section.sec_text = section_data.sec_text
        db_section.sec_date_in = section_data.sec_date_in

        session.commit()

        return db_section


    @classmethod
    def delete_section(cls, sec_id):
        session = DbSessionFactory.create_session()
        db_section = session.query(Section).filter(Section.doc_id == sec_id).first()

        if not db_section:
            return

        session.delete(sec_id)
        session.commit()


