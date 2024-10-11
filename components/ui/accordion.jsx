import { Accordion, HStack } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { LuChevronDown } from 'react-icons/lu'

export const AccordionItemTrigger = forwardRef(
  function AccordionItemTrigger(props, ref) {
    const { children, ...rest } = props
    return (
      <Accordion.ItemTrigger {...rest} ref={ref}>
        <HStack gap='4' flex='1' textAlign='start' width='full'>
          {children}
        </HStack>
        <Accordion.ItemIndicator>
          <LuChevronDown />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
    )
  },
)

export const AccordionItemContent = forwardRef(
  function AccordionItemContent(props, ref) {
    return (
      <Accordion.ItemContent>
        <Accordion.ItemBody {...props} ref={ref} />
      </Accordion.ItemContent>
    )
  },
)

export const AccordionRoot = Accordion.Root
export const AccordionItem = Accordion.Item
