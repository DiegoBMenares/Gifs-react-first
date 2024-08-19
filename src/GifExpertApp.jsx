
import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);


    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        
        setcategories([newCategory, ...categories]);
        //setCategories(['WarHammer 40K',...categories]);
    }

    return (
        <>

        <h1>GifExpertApp</h1>
        <AddCategory
            onNewCategory = {(event) => onAddCategory(event) }
        />

        {
            categories.map((category) => (
                <GifGrid 
                    key={category}                         
                    category= {category} 
                />
                )
            )
        }

        </>  
    )
}

//  apiKey: RWlyhyue08kqT7foK17l1p0J5ZFrKiUu
