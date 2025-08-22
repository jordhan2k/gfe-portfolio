import { ContactItem } from "@/features/contact/contact-section";
import { RiBuildingLine, RiMailLine, RiPhoneLine } from "@remixicon/react";


const CONTACT_TITLE = 'Talk to our team'
const CONTACT_DESC = "We're committed to delivering the support you require to make your experience as smooth as possible."

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: <RiBuildingLine />,
    title: '123 Maple Street, Springfield, IL, USA',
    type: 'address'
  },
  {
    icon: <RiPhoneLine />,
    title: '+1 (650) 555-0198',
    type: 'phone'
  },

  {
    icon: <RiMailLine />,
    title: 'hello@abstractly.com',
    type: 'email'
  }
]

export {
  CONTACT_ITEMS,
  CONTACT_TITLE,
  CONTACT_DESC
}