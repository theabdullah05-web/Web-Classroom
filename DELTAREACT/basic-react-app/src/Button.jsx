function hello(){
    console.log("hello")
}

function bye(){
    console.log("bye")
}

function handleDblClick(){
    console.log("You double clicked")
}

export default function Button(){
    return(
        <>
        <p onMouseOver={bye}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, possimus ducimus! Mollitia cum saepe maxime esse soluta eum libero doloremque aperiam non nihil est provident molestias quasi, optio, temporibus ducimus?
        Beatae illo placeat consequuntur pariatur, excepturi, distinctio facere repudiandae labore, architecto suscipit qui saepe. Nulla minus mollitia repellat libero facere. Obcaecati suscipit accusamus vel harum in ipsam odit vitae voluptatibus.
        Neque rerum nulla reprehenderit quibusdam impedit. Modi quaerat dolore atque doloribus sed dolor quia eligendi quibusdam nobis beatae aspernatur, fugiat culpa laborum eos maiores. Assumenda est corporis excepturi qui iste?
        Amet magni sequi repellendus earum qui illo a neque numquam in, cumque ea, repellat quidem maiores atque autem laudantium similique corrupti nostrum reiciendis quis sint? Necessitatibus quas sint quam natus!
        Sequi necessitatibus aliquam earum voluptas, rerum, eveniet minima aut, neque illum numquam ratione architecto ullam pariatur laudantium. Quia itaque ullam cum. Molestias eum harum eveniet sed velit itaque possimus dolorem.
        Natus doloremque et culpa quaerat molestiae eos illum enim maxime ea, accusamus totam nobis provident voluptatibus unde, fuga consequatur exercitationem dolores quae dolorum cupiditate, voluptate aliquam ducimus dicta? Ullam, labore.
        Adipisci nisi provident ut error quisquam deserunt mollitia, nam officiis in laborum, distinctio id. Eius perspiciatis, eveniet aperiam veritatis, magni vel, tempore neque blanditiis omnis dolores sit molestiae deserunt nam.
        Dolorum quasi aliquid rerum adipisci suscipit doloribus quibusdam veritatis eligendi, ex neque consectetur, aspernatur molestias sapiente. Facilis, esse tempora! Alias doloribus modi distinctio totam voluptate corrupti ipsam quis quisquam fuga?
        Consequuntur neque minima reprehenderit placeat nostrum vel beatae dolorem! Eveniet, modi debitis aliquid hic quidem sapiente quasi mollitia architecto suscipit quia ipsum itaque autem. Doloremque fuga aliquam eos quibusdam possimus?
        Minima excepturi possimus tenetur iure reiciendis voluptatibus sunt modi repudiandae, numquam autem at, aliquid animi architecto exercitationem consectetur, error veritatis veniam. Aut ut, dolores enim sed cupiditate et ducimus mollitia.</p>
        <button onClick={hello}>Click Me</button>
        <button onDoubleClick={handleDblClick}>Double Click Me</button>
        </>
    )
}