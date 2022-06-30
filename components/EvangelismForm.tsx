import styled from '@emotion/styled'
import CloseIcon from '@mui/icons-material/Close'
import HandshakeIcon from '@mui/icons-material/Handshake'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  AlertColor,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import { useTranslation } from 'next-i18next'
import React, { Dispatch, SetStateAction } from 'react'
import { FormEvent, useState } from 'react'

import { createER, EvangelismCategory, EvangelismRequest, Status } from '../pages/api/cms-api'

export const validateEmail = (email: string): boolean =>
  !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )

export const validateMobile = (mobile: string): boolean => String(mobile).length >= 10

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

interface Props {
  open: boolean
  handleClose: () => void
  setSnackBarMessage: Dispatch<SetStateAction<string>>
  setSnackBarType: Dispatch<SetStateAction<AlertColor>>
  setShowSnackBar: Dispatch<SetStateAction<boolean>>
}

export const EvangelismForm = (props: Props) => {
  const { t } = useTranslation('common')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const areInputsValid = (er: EvangelismRequest): boolean => {
    if (er?.email && !validateEmail(er?.email)) {
      setError(t('form.invalid_email'))

      return false
    }

    if (er?.mobile && !validateMobile(er?.mobile)) {
      setError(t('form.invalid_mobile'))

      return false
    }

    return true
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      setError('')
      const target = event.target as HTMLFormElement
      const elements = target.elements

      const name = (elements.namedItem('name') as HTMLInputElement).value
      const email = (elements.namedItem('email') as HTMLInputElement).value
      const mobile = (elements.namedItem('mobile') as HTMLInputElement).value
      const address = (elements.namedItem('address') as HTMLInputElement).value
      const age = (elements.namedItem('age') as HTMLInputElement).value
      const occupation = (elements.namedItem('occupation') as HTMLInputElement).value
      const religion = (elements.namedItem('religion') as HTMLInputElement).value
      const details = (elements.namedItem('details') as HTMLInputElement).value

      const er: EvangelismRequest = {
        name,
        email,
        mobile,
        address,
        age: +age,
        occupation,
        religion,
        otherdetails: details,
        category: EvangelismCategory.EvangelismRequest,
        status: Status.InProgress,
      }

      if (!areInputsValid(er)) return
      setLoading(true)
      const response = await createER(er)

      if (!response.ok) {
        console.error('Response:', response)
        throw Error('Response not ok.')
      }

      props.handleClose()
    } catch (error) {
      console.error(error)
      props.setSnackBarMessage(t('form.failed_submission'))
      props.setSnackBarType('error')
    }
    props.setShowSnackBar(true)
    setLoading(false)
  }

  return (
    <DialogStyled
      aria-labelledby="customized-dialog-title"
      onClose={() => {
        props.handleClose()
        setError('')
      }}
      open={props.open}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => {
          props.handleClose()
          setError('')
        }}
      >
        {t('form.title')}
      </BootstrapDialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Description>
            <HandshakeIcon />
            {t('form.subtitle')}
          </Description>

          <Content>
            <Left>
              <TextField
                color="error"
                id="name"
                label={t('form.name')}
                required
                size="small"
                type="text"
                variant="outlined"
              />
              <TextField
                color="error"
                id="email"
                label={t('form.email')}
                required
                size="small"
                type="text"
                variant="outlined"
              />
              <TextField
                color="error"
                id="mobile"
                label={t('form.mobile')}
                required
                size="small"
                type="tel"
                variant="outlined"
              />
            </Left>

            <Right>
              <TextField
                color="error"
                id="address"
                label={t('form.address')}
                size="small"
                type="text"
                variant="outlined"
              />
              <TextField color="error" id="age" label={t('form.age')} size="small" type="number" variant="outlined" />
              <TextField
                color="error"
                id="occupation"
                label={t('form.occupation')}
                size="small"
                type="text"
                variant="outlined"
              />
            </Right>
          </Content>

          <TextField
            className="mb-2"
            color="error"
            id="religion"
            label={t('form.religion')}
            size="small"
            type="text"
            variant="outlined"
          />

          <TextField
            color="error"
            id="details"
            label={t('form.details')}
            multiline
            rows={4}
            size="small"
            type="text"
            variant="outlined"
          />

          {error && <ErrorLabel color="error">{error}</ErrorLabel>}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            color="error"
            onClick={() => {
              handleClose()
              setError('')
            }}
          >
            {t('form.cancel', 'cancel')}
          </Button>

          <LoadingButton
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            type="submit"
            variant="contained"
          >
            {t('form.send', 'send')}
          </LoadingButton>
        </DialogActions>
      </form>
    </DialogStyled>
  )
}

const DialogStyled = styled(Dialog)`
  .MuiDialogContent-root {
    display: flex;
    flex-direction: column;
    padding: 0.8rem 2rem 1rem;
    width: 33em;
  }

  .MuiDialogActions-root {
    padding-bottom: 1rem;
    padding-right: 1rem;
  }
`

const Content = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 0.2rem;

  > div {
    margin-bottom: 0.5rem;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;

  > div {
    margin-bottom: 0.5rem;
  }
`

const Description = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
`

const ErrorLabel = styled(Typography)`
  padding-top: 1rem;
`
