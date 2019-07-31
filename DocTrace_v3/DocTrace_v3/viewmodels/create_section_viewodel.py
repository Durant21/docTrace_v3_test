from DocTrace_v3.Domain.Sections import Section

from DocTrace_v3.viewmodels.base_viewmodel import ViewModelBase


class CreateSectionViewModel(ViewModelBase):
    def __init__(self, data_dict):
        super().__init__()
        self.data_dict = data_dict
        self.Section = None

    def compute_details(self):
        sec_id = self.data_dict.get('sec_id')
        sec_text = self.data_dict.get('sec_text')
        sec_date_in = self.data_dict.get('sec_date_in')
        # doc_id = self.data_dict.get('doc_id')

        if not sec_text:
            self.errors.append("Section Text is required content.")

        if not self.errors:
            section = Section(
                sec_id=sec_id,
                sec_text=sec_text,
                sec_date_in=sec_date_in
            )
            self.Section = section


