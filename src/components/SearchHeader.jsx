import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
// import styles from '../modules/SearchHeader.module.css';

export default function SearchHeader() {

    const [text, setText] = useState('');
    const navigate = useNavigate();
    const {keyword} = useParams();

    useEffect(() => {
        setText(keyword || '')
    }, [keyword]);

    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
            
            <Link to='/' className='flex items-center'>
                <BsYoutube className='text-4xl text-brand' />
                <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
            </Link>

            <form
            className='w-full flex justify-center'
            type='submit'
            onSubmit={(e) => {
                e.preventDefault();
                navigate(`/videos/${text}`);

            }}>
                <input
                className='w-7/12 p-2 outline-non bg-black text-gray-50'
                type="text"
                placeholder='Search...'
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                } }
                />
                <button
                className='bg-zinc-600 px-4'
                ><FaSearch /></button>
            </form>

        </header>
    );
}

