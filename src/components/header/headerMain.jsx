import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import { FiSearch, FiPhoneCall } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { GiExitDoor } from "react-icons/gi";
import { Link } from 'react-router-dom';
import MenuSM from './MenuSM/MenuSM';

const HeaderMain = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lang] = useState(localStorage.getItem('lang') || 'hy');
  const [sm, setSM] = useState(false);
  const [name, setName] = useState(localStorage.getItem('name') || '');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://shinflex.am/SFApi/Header/?format=json');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Update name state from localStorage when component mounts
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!data || !data[0]) {
    return <div>No data available</div>;
  }

  const handleGetData = (lang, [en, ru, hy]) => {
    return lang === 'en' ? en : lang === 'ru' ? ru : hy;
  };

  return (
    <div className='headerMain'>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <IoMenuSharp className="header_menu_icon" onClick={() => setSM(true)} />
        {sm && <MenuSM sm={() => setSM()} />}
        <div id='logo'>
          <Link to='/'>
            <img src={data[0].logo} alt="ShinFlex" />
          </Link>
        </div>
      </div>
      <div className='searchItem'>
        <input type="text" placeholder='Որոնել' />
        <FiSearch className='searchIcon' />
      </div>
      <ul className='statsAndInfo'>
        <li id='phone'>
          <div className='header_data__panel'>
            <FiPhoneCall className='statsIcon' />
            <div>
              <p>{handleGetData(lang, [data[0].call_text_en, data[0].call_text_ru, data[0].call_text_hy])}</p>
              <span><b>{lang === 'en' ? data[0].call_number_en : lang === 'ru' ? data[0].call_number_ru : data[0].call_number_hy}</b></span>
            </div>
          </div>
        </li>
        <li>
          <div className='header_data__panel'>
            {name ? <GiExitDoor className='statsIcon' onClick={() => { localStorage.setItem('name', ''); window.location.reload() }} /> : <Link to="/account/login">
              <FaRegUser className='statsIcon' />
            </Link>}
            <div>
              <p>{handleGetData(lang, [data[0].login_en, data[0].login_ru, data[0].login_hy])}</p>
              <span><b>{name ? name : <Link to="/account/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log in</Link>}</b></span>
            </div>
          </div>
        </li>
        <li>
          <div className='header_data__panel'>
            <Link to='/pages/wishlist'><FaCartShopping className='statsIcon' /></Link>
            <div>
              <p>{handleGetData(lang, [data[0].user_text_en, data[0].user_text_ru, data[0].user_text_hy])}</p>
              <span><b>0.00 դր.</b></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMain