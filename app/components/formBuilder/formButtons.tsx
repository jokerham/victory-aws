import { FormikProps } from 'formik'
import { useRouter } from 'next/navigation'
import { ReactElement } from 'react'
import { Button } from '@mui/material'
import { RiSave3Fill } from 'react-icons/ri'
import { FaUndoAlt } from 'react-icons/fa'
import { useFormikContext } from "./formContext"

export interface IFormButtonProps {
  id: string,
  icon: ReactElement,
  text: string,
  handler: any
}

export type TFormButtons = {
  customButtons?: IFormButtonProps[],
  cancelEnabled?: boolean,
  submitEnabled?: boolean
}

export interface IFormButtonsProps {
  config: TFormButtons
}

const FormButton = (props: IFormButtonProps) => {
  const { id, icon, text, handler } = props
  return (
    <Button 
      variant="contained" 
      id={id} 
      startIcon={icon}
      onClick={handler}
    >
      {text}
    </Button>
  )
}

export default function FormButtons(props: IFormButtonsProps) {
  const router = useRouter()
  let buttonComponents: ReactElement[] = []

  const onClickCancelButton = () => {
    router.back()
  }

  if (props.config.customButtons !== undefined) {
    for(const button of props.config.customButtons) {
      buttonComponents.push(
        <FormButton key={button.id} id={button.id} icon={button.icon} text={button.text} handler={button.handler}/>
      )
    }
  }

  if (props.config.cancelEnabled !== undefined && props.config.cancelEnabled == true) {
    buttonComponents.push(
      <FormButton key="cancelButton" id="cancelButton" icon={<FaUndoAlt />} text="취소" handler={onClickCancelButton}/>
    )
  }

  if (props.config.submitEnabled !== undefined && props.config.submitEnabled == true) {
    const formik = useFormikContext() as FormikProps<any>
    buttonComponents.push(
      <FormButton key="submitButton" id="submitButton" icon={<RiSave3Fill />} text="저장" handler={formik.submitForm}/>
    )
  }

  return (
    <div className='form_buttons'>
      { buttonComponents }
    </div>
  )
}