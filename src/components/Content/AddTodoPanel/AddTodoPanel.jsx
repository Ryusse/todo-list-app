import { useState, useEffect } from 'react'

import Input from '../Input/Input'
import TextArea from '../../TextArea/TextArea'
import Button from '../../Utils/Button/Button'
import CloseButton from '../../Utils/CloseButton/CloseButton'

import './AddTodoPanell.css'

export default function AddTodoPanel(props) {
  const [mouseDown, setMouseDown] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', function (e) {
      setMouseDown(false)
    })
    document.addEventListener('keydown', function (e) {
      setMouseDown(true)
    })
  }, [])

  if (event.keyCode === 27) {
    //Do whatever when esc is pressed
  }

  return (
    <div
      className={`panel${props.className}`}
      aria-label={`panel${props.className}`}
    >
      <div className='panel__header-container'>
        <h3 className='panel__title'>Add new task</h3>
        <CloseButton
          className={`panel__close-button ${mouseDown ? 'mousedown' : ''}`}
        />
      </div>

      <div className='panel__input-container'>
        <Input
          className={`${mouseDown ? 'mousedown' : ''}`}
          type={'text'}
          aria-label={'input title'}
          placeholder={'Introduce the title '}
        />

        <TextArea
          className={`${mouseDown ? 'mousedown' : ''}`}
          id={'subject'}
          name={'subject'}
          aria-label={'input text'}
          placeholder={'Introduce your task'}
        />
      </div>
      <div className='panel__buton-container'>
        <Button
          className={`button--red ${mouseDown ? 'mousedown' : ''}`}
          content={'Cancel'}
        />
        <Button
          className={`button--green ${mouseDown ? 'mousedown' : ''}`}
          content={'Done'}
        />
      </div>
    </div>
  )
}
