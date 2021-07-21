<template>

  <div>
    <div id="body" class="mobile-menu-push">

      <div class="main-container ">
        <div id="header" class=" ">
          <div class="app-banner" style="display:none"><a target="_blank"
                                                          href="https://clarivate.com/webofsciencegroup/solutions/web-of-science-my-research-assistant/?utm_source=owned&amp;utm_medium=banner&amp;utm_campaign=My_Research_Assistant_App_Parent_SAR_Global_2021&amp;utm_content=publons-referral"><strong>Download
            Web of Science&trade; My Research Assistant</strong>:
            Bring the power of the Web of Science to your mobile device, wherever
            inspiration strikes.
          </a><span></span></div>
          <style>
            .app-banner {
              background-color: #369;
              color: white;
              text-align: center;
              cursor: pointer;
              padding: 10px 40px 10px 10px;
            }

            .app-banner a {
              font-size: 15px;
              line-height: 22px;
              color: white !important;
              width: 100%;
              /* Override styles on Squarespace to ensure link spans whole banner */
              display: inline-block;
            }

            .app-banner span {
              cursor: pointer;
              position: absolute;
              top: 0;
              right: 0;
              width: 35px;
              height: 35px;
              background: rgba(0, 0, 0, .15);
              color: #fff;
            }

            .app-banner span:after {
              content: '×';
              display: block;
              font-size: 15px;
              line-height: 35px;
            }
          </style>

          <!-- Menu -->
          <div class="menu-bar">
            <!-- Normal top bar -->
            <div class="hidden-xs">
              <div id="logo">
                <div id="logo-image">
                  <NuxtLink to="/academic" tag="a"><img class="large" src=""
                                                      alt="Academic"/><img class="small"
                                                                           src=""
                                                                           alt="Academic"
                  /></NuxtLink>
                </div>
              </div>
              <div class="menu">
                <ul class="full menu-logged-out">
                  <li class="menu-dropdown dropdown">
                    <div class="dropdown-toggle"><NuxtLink to="/academic"  tag="a">
                      Anasayfa
                    </NuxtLink></div>

                  </li>
                  <li  @click="underConstruction" class="menu-dropdown dropdown">
                    <div class="dropdown-toggle"><a>
                     Makaleler
                    </a></div>

                  </li>


                  <li class="active align-register-header-menu-right">
                    <div><a class="button positive register-link" @click.prevent="underConstruction">
                      İşlemler
                    </a></div>
                  </li>

                </ul>
              </div>
            </div>
            <!-- Mobile top bar -->
            <div class="mobile-header hidden-sm hidden-md hidden-lg">
              <div class="burger-menu-icon"><i id="toggle-mobile-menu" class="material-icons">&#xE5D2;</i></div>
              <div id="logo-mobile">
                <div id="logo-image-mobile">
                  <a href="https://publons.com/"><img class="small" style="display:inline;"
                                                      src=""
                                                      alt="Publons - Evaluating Academic Research"/></a>
                </div>
              </div>
            </div>
          </div>
          <!-- Breadcrumbs -->
          <div class="subheader">
            <div>
              <div id="breadcrumbs">
                <div>
                  <NuxtLink to="/academic">
                    <a href="">Academic v1</a>
                  </NuxtLink>
                  </div>


              </div>
            </div>
          </div>
        </div>
        <!-- /header -->
        <div id="separate-content" class="with-breadcrumbs"></div>
        <div class="pre_content"></div>
        <Nuxt/>
        <div id="footer">
          <div class="pre-footer">
            <div><a href="https://twitter.com/Publons" target="_blank"><i class="fab fa-twitter fa-lg"
                                                                          aria-hidden="true"></i></a></div>
            <div><a href="https://www.facebook.com/publons" target="_blank"><i class="fab fa-facebook fa-lg"
                                                                               aria-hidden="true"></i></a></div>
            <div><a href="https://www.linkedin.com/company/publons" target="_blank"><i class="fab fa-linkedin fa-lg"
                                                                                       aria-hidden="true"></i></a></div>
          </div>
          <div class="footer-content">
            <div class="license">
              <div>
                <a href="https://clarivate.com/" target="_blank"><img id="footer-logo"
                                                                      src=""
                                                                      alt="Akademisyen Görüntüleme işlemleri"/></a>
              </div>
            </div>
            <div class="links">
              <div class="contact">
                <p class="header">İşlemler 1</p>
                <ul>
                  <li>
                    <a ><img
                      src="">Örnek İşlem 1</a>
                  </li>

                </ul>
              </div>
              <div>
                <p class="header">İşlemler 2</p>
                <ul>
                  <li><a >Örnek İşlem 2</a></li>

                </ul>
              </div>
              <div>
                <p class="header">İşlemler 3</p>
                <ul>
                <li><a >Örnek İşlem 1</a></li>
                  <li><a >Örnek İşlem 2</a></li>
                  <li><a >Örnek İşlem 3</a></li>
                  <li><a >Örnek İşlem 4</a></li>
                  <li><a >Örnek İşlem 5</a></li>



                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div id="mobile-menu-background" class="hidden-sm hidden-md hidden-lg"></div>
    <nav class="mobile-menu mobile-menu-vertical mobile-menu-right hidden-sm hidden-md hidden-lg" id="mobile-menu-1">
      <div id="close-mobile-menu"></div>
      <div class="menu-holder">
        <ul>
          <li><a href="https://publons.com/"><span><i class="material-icons">&#xE88A;</i> Home</span></a></li>
          <li><a href="https://publons.com/account/login/?next=%2Fsearch%2F"
                 class="login-button"><span>Log in</span></a>
          </li>
          <li><a href="https://publons.com/account/register/"><span>Register</span></a></li>
          <li class="has-sub"><a><span><i class="material-icons">&#xE145;</i> Actions</span></a>
            <ul class="mobile-sub-menu">
              <li><a href="https://publons.com/account/register/">Register</a></li>
              <li><a href="https://publons.com/academy/">Learn to review</a></li>
            </ul>
          </li>
          <li class="has-sub"><a><span><i class="material-icons">&#xE8B6;</i> Browse</span></a>
            <ul class="mobile-sub-menu">
              <li><a href="https://publons.com/researcher/">Researchers</a></li>
              <li><a href="https://publons.com/journal/">Journals</a></li>
              <li><a href="https://publons.com/publon/">Publications</a></li>
              <li><a href="https://publons.com/institution/">Institutions</a></li>
              <li><a href="https://publons.com/country/">Countries/Regions</a></li>
            </ul>
          </li>
          <li class="has-sub"><a><span><i class="material-icons">&#xE7FB;</i> Community</span></a>
            <ul class="mobile-sub-menu">
              <li><a href="https://webofscienceacademy.clarivate.com/learn/signin">Academy - Learn to review</a></li>
              <li><a href="https://publons.com/community/peer-views/">Peer Views</a></li>
              <li><a href="https://publons.com/community/awards/">Awards</a></li>
              <li><a href="https://publons.com/community/career/">Advance your career</a></li>
              <li><a href="https://publons.com/blog/" target="_blank">Blog</a></li>
            </ul>
          </li>
          <li class="has-sub"><a><span><i class="material-icons">&#xE88F;</i> FAQ</span></a>
            <ul class="mobile-sub-menu">
              <li><a href="https://publons.freshdesk.com/support/home/" target="_blank">FAQ homepage</a></li>
              <li><a href="https://publons.freshdesk.com/support/solutions/5000103279" target="_blank">For
                Researchers</a>
              </li>
              <li><a href="https://publons.freshdesk.com/support/solutions/folders/12000003451" target="_blank">For
                Editors</a></li>
              <li><a href="https://publons.freshdesk.com/support/solutions/12000003331" target="_blank">For
                Publishers</a>
              </li>
              <li><a href="https://publons.freshdesk.com/support/solutions/12000003869" target="_blank">For Academy</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import saxNotifications from "../plugins/saxNotifications";
const underConstructionMessage = "Bu kısım yapım aşamasındadır.";
export default{
  methods :{
    underConstruction(){
      saxNotifications.error(underConstructionMessage);
    }
  }
}
</script>
<style scoped>
.mainContainer {
  width: 100%;
  height: 100%;
}
</style>
