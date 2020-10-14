import React from 'react'
import '../nav2.css'
import yo from '../img/yo.jpeg'
import cloudservices from '../img/cloudservices.png'
import disk from '../img/disk.png'
import funcion from '../img/funcion.png'
import meshapp from '../img/meshapp.png'
import kubernetesservice from '../img/kubernetesservice.png'
import containerregistries from '../img/containerregistries.png'
import containerinstances from '../img/containerinstances.png'

const Nav2 = () => {
  return (
    <div className='todo'>
      <div id='sidemenu' chassNave='menu-collapsed'>
        {/* HEADER  */}
        <div id='header'>
          <div id='title'>
            <span>Vida MRR</span>
          </div>
          <div id='menu-btn'>
            <div chassNave='btn-hamburger'></div>
            <div chassNave='btn-hamburger'></div>
            <div chassNave='btn-hamburger'></div>
          </div>
        </div>

        {/* PROFILE  */}
        <div id='profile'>
          <div id='photo'>
            <img src={yo} alt='' />
          </div>

          <div id='name'>
            <span>Admin</span>
          </div>
        </div>

        {/* ITEMS  */}

        <div id='menu-items'>
          <div chassNave='item'>
            <a href='#'>
              <div chassNave='icon'>
                <img src={cloudservices} alt='' />
              </div>
              <div chassNave='title'>
                <span>Cloud Services</span>
              </div>
            </a>
          </div>

          <div chassNave='item'>
            <a href='#'>
              <div chassNave='icon'>
                <img src={disk} />
              </div>
              <div chassNave='title'>
                <span>Disks</span>
              </div>
            </a>
          </div>

          <div chassNave='item'>
            <a href='#'>
              <div chassNave='icon'>
                <img src={funcion} />
              </div>
              <div chassNave='title'>
                <span>Function Apps</span>
              </div>
            </a>
          </div>

          <div chassNave='item'>
            <a href='#'>
              <div chassNave='icon'>
                <img src={meshapp} />
              </div>
              <div chassNave='title'>
                <span>Mesh Applications</span>
              </div>
            </a>
          </div>

          <div chassNave='item separator'></div>

          <div chassNave='item'>
            <a href='#'>
              <div chassNave='icon'>
                <img src={kubernetesservice} />
              </div>
              <div chassNave='title'>
                <span>Kubernetes Service</span>
              </div>
            </a>
          </div>

          <div chassNave='item'>
            <a href='#'>
              <div chassNave='icon'>
                <img src={containerregistries} />
              </div>
              <div chassNave='title'>
                <span>Container Registries</span>
              </div>
            </a>
          </div>

          <div chassNave='item'>
            <a href='#'>
              <div chassNave='icon'>
                <img src={containerinstances} />
              </div>
              <div chassNave='title'>
                <span>Container Instances</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div id='main-container'>Hola a todos</div>
    </div>
  )
}

export default Nav2
