import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import { CardButton } from './components'
import { useCreateLabelModal } from './hooks/useCreateLabelModal'

const Dashboard = React.memo(() => {
  const { t } = useTranslation()
  const { setOpen, CreateLabelModal } = useCreateLabelModal()
  return (
    <>
      <Stack direction="column" spacing={2}>
        <Typography variant="h4" component="h4">
          {t('Dashboard.CreateLabel')}
        </Typography>
        <CardButton icon={AddIcon} onClick={() => setOpen(true)}>
          {t('Dashboard.CreateLabel')}
        </CardButton>
      </Stack>
      <CreateLabelModal />
    </>
  )
})

export default Dashboard
