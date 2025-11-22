import React from 'react'

const whatsappbutton = () => {
  return (
    <div>
        {/* <!-- WhatsApp Floating Button  --> */}
  <button 
   class="fixed bottom-0 right-5 bg-green-500 text-white w-13 h-13 flex items-center justify-center rounded-full shadow-lg z-50 hover:bg-green-600 transition"
   onclick="window.open('https://wa.me/9813133394?text=Hello', '_blank')"
>
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHx5E9bFxbxN-DLLqPGB9ZT-6APaOQ-fQzTJfjNKfRMezJt21nwkwHwnKejdCBTerYPA&usqp=CAU"
    alt="WhatsApp Logo"
    class="w-12 h-12 border-white border-2 rounded-full"
  />
</button>
    </div>
  )
}

export default whatsappbutton