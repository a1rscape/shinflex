import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MenuSM.css';
import AOS from 'aos';

const MenuSM = ({ sm }) => {

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="menuSM_full">
            <div className='menuSM_main' data-aos="fade-right">
                <div className="menu-header">
                    <h3>Menu</h3>
                    <button className="close-btn" onClick={() => sm(false)}>✕</button>
                </div>
                <ul>
                    <li><Link onClick={() => sm(false)} to="/">Home</Link></li>
                    <li>
                        <Link to="/our-store" onClick={() => sm(false)}>Our Store</Link>
                    </li>
                    <li>
                        <Link to="/special" onClick={() => sm(false)}>
                            Special <span className="label sale">SALE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/categories" onClick={() => sm(false)}>
                            Categories <span className="label hot">HOT</span>
                        </Link>
                    </li>
                    <li><Link onClick={() => sm(false)} to="/top-deals">Top Deals</Link></li>
                    <li><Link onClick={() => sm(false)} to="/collections">Elements</Link></li>
                    <li><Link onClick={() => sm(false)} to="/abrasives">Abrasives</Link></li>
                    <li><Link onClick={() => sm(false)} to="/cutter-tools">Cutter Tools</Link></li>
                    <li><Link onClick={() => sm(false)} to="/hammers">Hammers</Link></li>
                    <li><Link onClick={() => sm(false)} to="/nailers">Nailers</Link></li>
                    <li><Link onClick={() => sm(false)} to="/scissors">Scissors</Link></li>
                    <li><Link onClick={() => sm(false)} to="/washers">Washers</Link></li>
                    <li><Link onClick={() => sm(false)} to="/power-tools">Power Tools</Link></li>
                    <li><Link onClick={() => sm(false)} to="/chargers">Chargers</Link></li>
                    <li><Link onClick={() => sm(false)} to="/impact-drills">Impact Drills</Link></li>
                    
                    <div className="menu-footer">
                        <div className="social-icons">
                            <a href="/"><i className="fab fa-twitter"></i></a>
                            <a href="/"><i className="fab fa-facebook"></i></a>
                            <a href="/"><i className="fab fa-pinterest"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </ul>
            </div>

            <div className='close' onClick={() => sm(false)}></div>
        </div>
    );
};

export default MenuSM;
