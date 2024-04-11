import { useTranslations } from 'next-intl'
import TextField from '@mui/material/TextField'
import { LoadingButton } from '@mui/lab'

export default function ContentEvangelizationForm() {
  const t = useTranslations('form')

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl ">{t('title')}</h1>
        <p className="text-sm">{t('subtitle')}</p>
        <p className="text-sm">{t('text')}</p>
        <form className="flex flex-col gap-3">
          <div className="flex w-4/5">
            <div className=" flex-col gap-3 w-1/2 ">
              <TextField
                id="outlined-basic"
                label={t('name')}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label={t('email')}
                variant="outlined"
              />
            </div>
            <div className="w-1/2">
              <TextField
                className=""
                id="outlined-basic"
                label={t('mobile')}
                variant="outlined"
              />
            </div>
          </div>

          <div>
            <TextField
              color="error"
              id="details"
              label={t('details')}
              multiline={true}
              rows={2}
              size="small"
              type="text"
              variant="outlined"
            />
          </div>
          <LoadingButton
            color="secondary"
            loadingPosition="end"
            sx={{ padding: '0.5rem 3rem' }}
            type="submit"
            variant="outlined"
          >
            {t('send')}
          </LoadingButton>
        </form>
      </div>
    </div>
  )
}
