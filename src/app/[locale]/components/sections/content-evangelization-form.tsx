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
          <div className="flex">
            <div className=" flex gap-3 w-full   ">
              <TextField
                fullWidth={true}
                id="fullWidth"
                label={t('name')}
                variant="standard"
              />
              <TextField
                fullWidth={true}
                id="fullWidth"
                label={t('email')}
                variant="standard"
              />

              <TextField
                fullWidth={true}
                id="fullWidth"
                label={t('mobile')}
                variant="standard"
              />
            </div>
          </div>

          <div>
            <TextField
              color="error"
              fullWidth={true}
              id="fullWidth"
              label={t('details')}
              multiline={true}
              rows={2}
              size="small"
              type="text"
              variant="standard"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-[#e3ae04] rounded-md flex justify-center items-center py-1 my-4 w-44 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:bg-[#e3ae04] duration-700">
              <LoadingButton
                className="text-black font-bold"
                loadingPosition="end"
                type="submit"
              >
                {t('send')}
              </LoadingButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
