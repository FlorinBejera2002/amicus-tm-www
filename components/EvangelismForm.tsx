import styled from '@emotion/styled'
import CloseIcon from '@mui/icons-material/Close'
import HandshakeIcon from '@mui/icons-material/Handshake'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
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
}

export const EvangelismForm = ({ open, handleClose }: Props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const areInputsValid = (er: EvangelismRequest): boolean => {
    if (er?.email && !validateEmail(er?.email)) {
      setError('Email-ul nu este valid')

      return false
    }

    if (er?.mobile && !validateMobile(er?.mobile)) {
      setError('Numărul de telefon nu este valid')

      return false
    }

    return true
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
    await createER(er)
    handleClose()
    setLoading(false)
  }

  return (
    <DialogStyled
      aria-labelledby="customized-dialog-title"
      onClose={() => {
        handleClose()
        setError('')
      }}
      open={open}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => {
          handleClose()
          setError('')
        }}
      >
        Cerere de evanghelizare
      </BootstrapDialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Description>
            <HandshakeIcon />
            Ajută-ne să ajutăm pe alții
          </Description>

          <Content>
            <Left>
              <TextField color="error" id="name" label="nume" required size="small" type="text" variant="outlined" />
              <TextField color="error" id="prenume" label="prenume" size="small" type="text" variant="outlined" />
              <TextField color="error" id="email" label="email" required size="small" type="text" variant="outlined" />
              <TextField
                color="error"
                id="mobile"
                label="telefon"
                required
                size="small"
                type="tel"
                variant="outlined"
              />
            </Left>

            <Right>
              <TextField color="error" id="address" label="adresă" size="small" type="text" variant="outlined" />
              <TextField color="error" id="age" label="vârstă" size="small" type="number" variant="outlined" />
              <TextField color="error" id="occupation" label="ocupație" size="small" type="text" variant="outlined" />
              <TextField color="error" id="religion" label="religie" size="small" type="text" variant="outlined" />
            </Right>
          </Content>

          <TextField
            color="error"
            id="details"
            label="detalii"
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
            Renunță
          </Button>

          <LoadingButton
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            type="submit"
            variant="contained"
          >
            Trimite
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
