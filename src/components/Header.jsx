import React,{useEffect, useState} from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Header() {
    const [searchItem, setSearchItem] = useState('');
    const navigate = useNavigate();
    const { keyword } = useParams();

    useEffect(() => {
        setSearchItem(keyword || '')
    },[keyword])
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
        const handleChange = (e) => {
        const {value} = e.target;
        setSearchItem(value);
    }

    const handleClick = () => {
        navigate(`/videos/${searchItem}`);
    }
    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
            <Link className='flex items-center' to="/">
                <BsYoutube className='text-4xl text-brand'/>
                <h1 className='text-bold ml-2 text-3xl'>Youtube</h1>
            </Link>
            
            <form
            className='w-full flex justify-center'
            onSubmit={handleSubmit}
            >
                <input 
                className='w-7/12 p-2 outline-none bg-black text-gray-50'
                value={searchItem}
                onChange={handleChange}
                placeholder='Search Videos'
                type="text" />
                <button
                className='bg-zinc-600 px-4'
                onClick={handleClick}
                ><BsSearch /></button>
            </form>

        </header>
    );
}

