import logo from '../logo.png'

const Header = () => {
  return (
    <header class='container mx-auto py-4'>
      <div className='grid grid-cols-2'>
        <div>
          <a href='/'>
            <img src={logo} alt='TubeFlix' className='h-10' />
          </a>
        </div>
        <div className='text-right text-red-600'>
          <a
            className='inline-block p-2 font-semibold hover:text-white'
            href='/'
          >
            All
          </a>
          <a
            className='inline-block p-2 font-semibold hover:text-white'
            href='/'
          >
            Malayalam
          </a>
          <a
            className='inline-block p-2 font-semibold hover:text-white'
            href='/'
          >
            Hindi
          </a>
          <a
            className='inline-block p-2 font-semibold hover:text-white'
            href='/'
          >
            Tamil
          </a>
          <a
            className='inline-block p-2 font-semibold hover:text-white'
            href='/'
          >
            English
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
