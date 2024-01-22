import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  example: string
}

export function SearchForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={'test'} {...register('example')} />
      {errors.example && <span>This field is required</span>}
      <button type={'submit'}>Искать</button>
    </form>
  )
}
