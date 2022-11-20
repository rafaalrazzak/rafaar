import clsx from 'clsx'

import siteMetadata from '@/data/siteMetadata'
/* eslint-disable react/no-unescaped-entities */

function Hero({ className }) {
  return (
    <div className={clsx('flex max-w-lg flex-col gap-6 py-6', className)}>
      <h1>Rafa Al Razzak</h1>
      <h2 className="text-gradient bg-gradient-to-r from-teal-500 to-teal-800 text-5xl font-bold">
        Front-End Developer, Desainer
      </h2>
      <p className=" text-primary-600 dark:text-primary-400">
        {siteMetadata.SELF_DESCRIPTION}
      </p>
    </div>
  )
}

export default Hero
