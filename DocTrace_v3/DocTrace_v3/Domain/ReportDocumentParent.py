class Report_Doc_Parent:
    def __init__(self):
        self.doc_id = ''
        self.doc_name = ''
        self.parent_id = ''
        self.parent_doc_name = ''
        self.relationship = ''

    def add_doc_name(self, name):
        self.doc_name = name

    def add_doc_id(self, id):
        self.doc_id = id

    def add_parent_id(self,id):
        self.parent_id = id

    def add_parent_doc_name(self,txt):
        self.parent_doc_name = txt

    def add_relationship(self,txt):
        self.relationship = txt


    def to_dict(self):
        return {
            'relationship': self.relationship,
            'doc_name': self.doc_name,
            'parent_doc_name': self.parent_doc_name,
            'parent_id': self.parent_id,
            'doc_id': self.doc_id,
        }