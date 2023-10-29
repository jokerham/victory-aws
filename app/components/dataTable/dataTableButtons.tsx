import { Button } from '@mui/material'
import { BsCheckCircle } from 'react-icons/bs'
import { IoAdd } from 'react-icons/io5'
import { FiCopy } from 'react-icons/fi'
import { VscEdit } from 'react-icons/vsc'
import { RiDeleteBinLine } from 'react-icons/ri'
import { ReactNode } from 'react'
import { ReactElement } from 'react-markdown/lib/react-markdown'

interface IDataTableButton {
  name: String
  icon: ReactNode
  toggleOnSelect: boolean
  editButtonDisabled: boolean
  onClickEventHandler: (value: any | null) => void
  valuesOnSelectedRow: any
  label: String
}

const DataTableButton = (props: IDataTableButton) => {
  const { icon, toggleOnSelect, editButtonDisabled, onClickEventHandler, valuesOnSelectedRow, label } = props
  const disabled = toggleOnSelect && editButtonDisabled

  const onClick= () => {
    onClickEventHandler(valuesOnSelectedRow)
  }

  return (
    <Button
      variant="contained" 
      startIcon={icon}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </Button>
  )
}

export interface IButtonOption {
  name: string,
  action: string | ((value: any) => void)
}

interface IDataTableButtons {
  buttons: IButtonOption[]
  valuesOnSelectedRow: any | undefined
  editButtonDisabled: boolean
}

const DataTableButtons = (props: IDataTableButtons) => {
  const { buttons, valuesOnSelectedRow, editButtonDisabled } = props
  const dataTableButtonList: ReactElement[] = []

  const possiblePresetButtons = {
    add: { icon: <IoAdd />, label: '추가', toggleOnSelect: false},
    edit: { icon: <VscEdit />, label: '수정', toggleOnSelect: true},
    copy: { icon: <FiCopy />, label: '복사', toggleOnSelect: true},
    delete: { icon: <RiDeleteBinLine />, label: '삭제', toggleOnSelect: true},
    approve: { icon: <BsCheckCircle />, label: '승인', toggleOnSelect: true},
  }

  buttons.forEach(button => {
    const { name, action } = button
    if (possiblePresetButtons.hasOwnProperty(name)) {
      const possiblePresetButton = possiblePresetButtons[name as keyof typeof possiblePresetButtons]
      const { icon, label, toggleOnSelect } = possiblePresetButton
      const onClickEventHandler = typeof action == 'string' ?
        (value: any) => {} : action
      dataTableButtonList.push(
        <DataTableButton
          key={name}
          name={name}
          icon={icon}
          toggleOnSelect={toggleOnSelect}
          editButtonDisabled={editButtonDisabled}
          onClickEventHandler={onClickEventHandler}
          valuesOnSelectedRow={valuesOnSelectedRow}
          label={label} />
      )
    }
  });

//     possiblePresetButtons.forEach((presetButton) => {
//       if (props.buttons != undefined && props.buttons.hasOwnProperty(presetButton.name)) {
//         if (typeof props.buttons[presetButton.name] === 'string') {
//           const pathname = props.buttons[presetButton.name];
//           const link = { pathname: pathname };
//           const state = (editButtonDisabled) ? {} : JSON.parse(JSON.stringify(rowValue));
//           if (presetButton.name === 'copy') { state.id = ''; }
//           buttonComponents.push(
//             <Link href={link} state={state} key={presetButton.name} >
//               <Button 
//                 variant="contained" 
//                 startIcon={presetButton.icon} 
//                 disabled={presetButton.toggleOnSelect && editButtonDisabled}>
//                 {presetButton.label}
//               </Button>
//             </Link>
//           );
//         } else {
//           const onClickEventHandler = (e) => {
//             const callback = props.buttons[presetButton.name];
//             callback(rowValue);
//             setEditButtonDisabled(true);
//           }
//           buttonComponents.push(
//             <Button 
//               key={presetButton.name} 
//               variant="contained" 
//               startIcon={presetButton.icon} 
//               disabled={presetButton.toggleOnSelect && editButtonDisabled}
//               onClick={onClickEventHandler}>
//               {presetButton.label}
//             </Button>
//           );
//         }
//       }
//     })

//     if (customButtons != null) {
//       customButtons.forEach((customButton) => {
//         if (typeof customButton.onClickHandler === 'string') {
//           const pathname = customButton.onClickHandler ;
//           const link = { pathname: pathname };
//           buttonComponents.push(
//             <Link href={link} key={customButton.name} >
//               <Button variant="contained" startIcon={customButton.icon}>
//                 {customButton.label}
//               </Button>
//             </Link>
//           );
//         } else {
//           const onClickEventHandler = (e: MouseEventHandler) => {
//             const callback = customButton.onClickHandler;
//             callback(rowValue);
//             setEditButtonDisabled(true);
//           }
//           buttonComponents.push(
//             <Button 
//               key={customButton.name} 
//               variant="contained" 
//               startIcon={customButton.icon} 
//               disabled={customButton.toggleOnSelect && editButtonDisabled}
//               onClick={onClickEventHandler}>
//               {customButton.label}
//             </Button>
//           );
//         }
//       });
//     }

//     return (
//       <div className="page-body__card_buttons">
//         {buttonComponents}
//       </div>
//     )


  return (
    <div className="page-body__card_buttons">
      {dataTableButtonList}
    </div>
  )
}

export default DataTableButtons