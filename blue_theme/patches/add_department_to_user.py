import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_fields

def execute(update=True):
    custom_fields = {'User': [
        {
            "fieldname": "department",
            "fieldtype": "Link",
            "label": "Department",
            "options": "Department",
            "insert_after": "username"
        }
       
    ],
        
        
        
    }
    create_custom_fields(
        custom_fields, ignore_validate=frappe.flags.in_patch, update=update)
