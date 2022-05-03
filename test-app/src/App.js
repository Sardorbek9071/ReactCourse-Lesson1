import './App.css';
import Books from './component/books'
function App() {
    const imagesAlbum=[
      {
        img: "https://picsum.photos/200/300",
        title: "Baxtiyor Razzakovich",
        author: "Odam"
      },
      {
        img: "https://picsum.photos/200/301",
        title: "Navro'z Razzakovich",
        author: "Odam"
      },
      {
        img: "https://picsum.photos/200/302",
        title: "Husan Razzakovich",
        author: "Odam"
      },
    ]
   return(
     <div className='container'>
       <div className='wrapper'>
       {
       imagesAlbum.map((imag, index)=>{
           return(
            <Books
            img={imag.img}
            title={imag.title}
            author="https://picsum.photos"
            key = {index}
        />
           )
             })
         }
       </div>
     </div>
   )
}

export default App;
