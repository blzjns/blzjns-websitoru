import Button from '../Button';

import { AppStates } from '@/App';
import { useEffect, useState } from 'react';
import hireMe_md from '../../../blog/Why You Should Hire Me.md';
import logo from '../../logo.svg';
import ProfilePic from './ProfilePic';

const focusOnTerminalInput = () =>
  document.getElementById('terminalInput')?.focus();

export default function Sidebar({ parentStates }: { parentStates: AppStates }) {
  const [showProfilePic, setShowProfilePic] = useState(false);
  const [clientWidth, setClientWidth] = useState(document?.body?.clientWidth);

  const [, setShowResume] = parentStates.showResume;
  const [, handleShowBlog] = parentStates.showBlog;
  const [, setCurrentCommand] = parentStates.currentCommand;
  const logoCSS = clientWidth > 1280 ? '' : 'w-screen';

  useEffect(() => {
    window.onresize = function (evt: any) {
      setClientWidth((evt.srcElement || evt.currentTarget).innerWidth);
    };
  }, []);

  return (
    <div
      id="sidebar"
      className={`xl:h-auto xl:flex xl:flex-col mb-3 xl:mr-5 pr-5 xl:border-r-1 xl:border-r-white`}
    >
      <div
        onMouseOut={() => setShowProfilePic(false)}
        onMouseOver={() => setShowProfilePic(true)}
        className={`flex justify-center mb-3 xl:hover:animate-bounce ${logoCSS}`}
      >
        {!showProfilePic ? (
          <span className="flex">
            <img src={logo} className="w-30"></img>{' '}
            <span className="font-bold ml-[-20px] mt-[30%]">blzjns</span>
          </span>
        ) : (
          <ProfilePic />
        )}
      </div>
      <Button onClick={() => setShowResume(false)}>Terminal</Button>
      <Button
        onClick={() => {
          setShowResume(true);
        }}
      >
        Resume
      </Button>
      <Button
        onClick={() => {
          setShowResume(false);
          setCurrentCommand('whoami');
          focusOnTerminalInput();
        }}
      >
        Bio
      </Button>
      <Button
        onClick={() => {
          setShowResume(false);
          setCurrentCommand('cd ~/blog');
          focusOnTerminalInput();
        }}
      >
        Blog
      </Button>
      <ul
        className={`list-[square] ml-7 mb-5 hover:border-b-2 hover:border-b-green-300 hover:bg-indigo-950 hover:cursor-pointer hover:animate-pulse`}
      >
        <li>
          <a
            onClick={() => {
              setShowResume(false);
              handleShowBlog(hireMe_md);
            }}
          >
            Why You Should Hire Me
          </a>
        </li>
      </ul>
    </div>
  );
}
