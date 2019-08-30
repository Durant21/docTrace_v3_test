import sqlite3
import os
import DocTrace_v3
from DocTrace_v3.Domain.ReportDocumentParent import Report_Doc_Parent

class Sql_Doc_Parent:

    # @classmethod
    # def get_sections(cls):
    #
    #     # source:  https://sebastianraschka.com/Articles/2014_sqlite_in_python_tutorial.html
    #
    #     working_folder = os.path.dirname(DocTrace_v3.__file__)
    #     file = os.path.join(working_folder,'db','myDocuments.sqlite')
    #     conn_string = 'sqlite:///' + file
    #
    #     # conn = sqlite3.connect('example.db')
    #     # conn = sqlite3.connect(conn_string)
    #
    #
    #     conn = sqlite3.connect(file)
    #     c = conn.cursor()
    #     c.execute('SELECT * FROM sections')
    #
    #     all_rows = c.fetchall()
    #     print('1):', all_rows)
    #
    #     conn.close()
    #
    #     return all_rows

    @classmethod
    def doc_parent_by_doc_id(cls, doc_id):

        # source:  https://sebastianraschka.com/Articles/2014_sqlite_in_python_tutorial.html

        working_folder = os.path.dirname(DocTrace_v3.__file__)
        file = os.path.join(working_folder,'db','myDocuments.sqlite')
        conn_string = 'sqlite:///' + file

        conn = sqlite3.connect(file)
        c = conn.cursor()
        # c.execute('SELECT * FROM Document_Parent = {}'.format(section_id))
        # c.execute('SELECT * FROM Document_Parent')

        # c.execute('select dp.relationship, d2.doc_name as parent, d1.doc_name  from Document_Parent dp \
        #             join Document d1 on dp.doc_id = d1.doc_id \
        #             join Document d2 on dp.parent_id = d2.doc_id \
        #             where d1.doc_id = "{}"'.format(doc_id))

        c.execute('select  dp.relationship, d2.doc_name as parent, d1.doc_name, d1.doc_id, dp.parent_id  from Document_Parent dp \
                    join Document d1 on dp.doc_id = d1.doc_id \
                    join Document d2 on dp.parent_id = d2.doc_id')
                    # where d1.doc_id = "{}"'.format(doc_id))

        all_rows = c.fetchall()
        print('1):', all_rows)
        docs = []
        for rec in all_rows:

            u = Report_Doc_Parent()
        #
        # u.add_group_id(g.group_id)
        # u.add_doc_name(d.doc_name)
        # u.add_sec_text(s.sec_text)
        # u.add_sec_id(s.sec_id)

            u.add_doc_id(rec[3])
            u.add_doc_name(rec[2])
            u.add_parent_doc_name(rec[1])
            u.add_relationship(rec[0])
            u.add_parent_id(rec[4])

            docs.append(u.to_dict())

        conn.close()

        return docs

    # @classmethod
    # def create_section(cls,task):
    #     working_folder = os.path.dirname(DocTrace_v3.__file__)
    #     file = os.path.join(working_folder,'db','myDocuments.sqlite')
    #     conn_string = 'sqlite:///' + file
    #
    #     conn = sqlite3.connect(file)
    #
    #
    #     sql = ''' INSERT INTO Sections(doc_text, date_in)
    #                VALUES(?,?) '''
    #     cur = conn.cursor()
    #     cur.execute(sql, task)
    #     return cur.lastrowid


