function Avatar() {
  return (
    <>
      <div className='rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden'>
        <img src='https://avatars0.githubusercontent.com/u/38799309?v=4' alt='profilepic' />
      </div>
      <span className='pt-1 ml-2 font-bold text-sm'>Jon Doe</span>
    </>
  );
}

export function PostLayout({ image }: { image: React.ReactNode }) {
  return (
    <div className='rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mt-16 mx-auto'>
      <div className='w-full flex justify-between p-3'>
        <div className='flex'>
          <Avatar />
        </div>
        <span className='px-2 hover:bg-gray-300 cursor-pointer rounded'>
          <i className='fas fa-ellipsis-h pt-2 text-lg'></i>
        </span>
      </div>
      {image}
    </div>
  );
}
