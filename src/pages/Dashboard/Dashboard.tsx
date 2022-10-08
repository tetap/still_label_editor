import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import { CardButton, Sider } from './components'
import { useModal } from '@/hooks'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

type FormValueType = {
  width: string
  height: string
}

const Dashboard: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { modalRef, Modal } = useModal()
  const [values, setValues] = React.useState<FormValueType>({
    width: '50',
    height: '30'
  })
  const handleChange =
    (prop: keyof FormValueType) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }
  return (
    <Box
      sx={{
        display: 'flex',
        height: 1,
        width: 1
      }}
    >
      <Sider />
      <Box
        sx={{
          flex: 1,
          minHeight: '1px',
          minWidth: '1px',
          width: 1,
          height: 1,
          padding: 2
        }}
      >
        <Stack direction="column" spacing={2}>
          <Typography variant="h4" component="h4">
            {t('Dashboard.CreateLabel')}
          </Typography>
          <CardButton
            icon={AddIcon}
            onClick={() => {
              modalRef.current?.open()
            }}
          >
            {t('Dashboard.CreateLabel')}
          </CardButton>
        </Stack>
      </Box>
      <Modal
        disabledBackdropClick
        title={t('Dashboard.CreateLabel')}
        maxWidth="xs"
        onOk={(setSpinning, close) => {
          setSpinning(true)
          setTimeout(() => {
            setSpinning(false)
            close()
            navigate('/editor')
          }, 1000)
        }}
      >
        <TextField
          label={t('CreateLabelForm.width')}
          fullWidth
          required
          margin="dense"
          id="outlined-error-helper-text"
          type="number"
          helperText=""
          InputProps={{
            endAdornment: <InputAdornment position="end">MM</InputAdornment>,
            inputProps: { max: 100, min: 10 }
          }}
          value={values.width}
          onChange={handleChange('width')}
        />
        <TextField
          label={t('CreateLabelForm.height')}
          fullWidth
          required
          margin="dense"
          id="outlined-error-helper-text"
          type="number"
          helperText=""
          InputProps={{
            endAdornment: <InputAdornment position="end">MM</InputAdornment>,
            inputProps: { max: 100, min: 10 }
          }}
          value={values.height}
          onChange={handleChange('height')}
        />
      </Modal>
    </Box>
  )
}

export default Dashboard
