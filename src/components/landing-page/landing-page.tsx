import { Component, Element, State, h } from '@stencil/core';
import copy from 'copy-text-to-clipboard';
import { ResponsiveContainer } from '@ionic-internal/sites-shared';

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.css'
})
export class LandingPage {
  private timer: any;
  @Element() el!: Element;

  @State() copiedState = 0;

  constructor() {
    document.title = `Stencil`;
  }

  copyCommand = () => {
    copy('npm init stencil');
    this.copiedState = Math.min(COPY_STATES.length - 1, this.copiedState + 1);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.copiedState = 0, 1500);
  }

  render() {
    return (
      <div>
        <ResponsiveContainer class="hero">
          <hgroup>
            <h1>Let Web Components behave like Apps. Finally! </h1>
            <p>Appkit is a library for building reusable Web Components as Apps. Easily break up your monolith UI and integrate reusable standards based Web Components instead.</p>
            <stencil-route-link url="/docs/getting-started" class="hero-button" anchorClass="btn-get-started">Get started</stencil-route-link>
            <stencil-route-link url="/docs/introduction" class="hero-button" anchorClass="btn-why-stencil">Why Appkit?</stencil-route-link>
          </hgroup>
          <svg class="landing-page__bg" width="661" height="573" viewBox="0 0 661 573" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M301.972 460.59H459.711L374.445 553H217.555L301.972 460.59Z" fill="#EFF1FF"/>
            <path opacity="0.4" d="M585.269 95.2073H660.886L620.011 140.163H544.801L585.269 95.2073Z" fill="#EBEEFF"/>
            <path opacity="0.5" d="M90.1233 373.915H177.864L130.436 426.012H43.1665L90.1233 373.915Z" fill="#F4F6FF"/>
            <path opacity="0.7" d="M245.223 357.66H464.593L346.012 485.785H127.822L245.223 357.66Z" fill="#EBEEFF"/>
            <path opacity="0.6" d="M532.162 232.02H654.938L588.571 304.449H466.456L532.162 232.02Z" fill="#EFF1FF"/>
            <path opacity="0.5" d="M536.924 369.634H612.541L571.666 414.59H496.456L536.924 369.634Z" fill="#F4F6FF"/>
            <path opacity="0.4" d="M113.243 107.654H188.86L147.985 152.61H72.7747L113.243 107.654Z" fill="#EBEEFF"/>
            <path opacity="0.5" d="M330.845 158.854H477.2L398.087 245.02H252.519L330.845 158.854Z" fill="#F4F6FF"/>
            <path opacity="0.5" d="M508.327 0H636L566.986 75H440L508.327 0Z" fill="#F4F6FF"/>
            <path opacity="0.5" d="M64.4925 502H185L119.859 573H0L64.4925 502Z" fill="#F4F6FF"/>
            <path opacity="0.7" d="M602.805 205.808H152.133L33.6135 333.933H484.286L602.805 205.808Z" fill="#EBEEFF"/>
            <path opacity="0.7" d="M293.465 53.9561H512.026L393.989 182.081H175.254L293.465 53.9561Z" fill="#E6EAFF"/>
            <path opacity="0.43" d="M273.266 9H374.089L319.589 67.6927H219.309L273.266 9Z" fill="#F4F6FF"/>
          </svg>
        </ResponsiveContainer>

        <div class="companies">
          <ResponsiveContainer>
            <h3>Powering apps at</h3>
            <ul>
              <li>
                <svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Previsto logo</title>
                  <path d="M23.275 8.4281C20.125 8.4281 18.7938 9.97498 16.6 9.97498C14.35 9.97498 12.6344 8.43748 9.90626 8.43748C7.23438 8.43748 4.38438 10.1156 2.57501 12.975C0.0343835 17.0062 0.465633 24.6 4.58126 31.0687C6.05313 33.3843 8.02188 35.9812 10.6 36.0093H10.6469C12.8875 36.0093 13.5531 34.5 16.6375 34.4812H16.6844C19.7219 34.4812 20.3313 36 22.5625 36H22.6094C25.1875 35.9718 27.2594 33.0937 28.7313 30.7875C29.7906 29.1281 30.1844 28.2937 31 26.4187C25.0469 24.0937 24.0906 15.4125  29.9781 12.0844C28.1781 9.76873 25.6563 8.4281 23.275 8.4281V8.4281Z" fill="black"/>
                  <path d="M22.5812 0C20.7062 0.13125 18.5218 1.35937 17.2374 2.9625C16.0749 4.41562 15.1187 6.57187 15.4937 8.6625H15.6437C17.6406 8.6625 19.6843 7.425 20.8749 5.84063C22.0281 4.33125 22.8999 2.19375 22.5812 0V0Z" fill="black"/>
                </svg>
              </li>
              <li>
                <svg width="86" height="26" viewBox="0 0 86 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>EG logo</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.357 20.3333C48.3611 24.0329 41.1143 26 34.8774 26C26.1346 26 18.262 22.7584 12.3045 17.3612C11.8371 16.9381 12.2534 16.3588 12.8175 16.6875C19.245 20.4411 27.1955 22.6991 35.4039 22.6991C40.9424 22.6991 47.0315 21.5459 52.6318 19.1612C53.4752 18.8028 54.1816 19.7216 53.357 20.3333Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.436 17.9513C54.7967 17.1294 51.2109 17.5633 49.5993 17.7573C49.1105 17.8166 49.0353 17.3881 49.4758 17.0782C52.3363 15.0627 57.0234 15.6447 57.5686 16.3184C58.1166 17.0001 57.4236 21.7129 54.743 23.9629C54.3293 24.3078 53.9372 24.1246 54.1225 23.6665C54.7242 22.1575 56.0752 18.7731 55.436 17.9513Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M49.712 2.84011V0.881148C49.7147 0.58205 49.9376 0.385345 50.2062 0.385345H58.9571C59.2365 0.385345 59.4621 0.590133 59.4621 0.878453V2.55987C59.4594 2.8428 59.2231 3.20926 58.804 3.79399L54.2728 10.2852C55.9542 10.2448 57.735 10.4981 59.2634 11.3604C59.6072 11.5544 59.7012 11.8427 59.728 12.1256V14.2166C59.728 14.5049 59.4138 14.8364 59.0834 14.6639C56.3893 13.2493 52.817 13.093 49.8382 14.6828C49.5347 14.8445 49.2151 14.5157 49.2151 14.2274V12.2415C49.2151 11.9235 49.2205 11.3792 49.5401 10.8942L54.7912 3.33591H50.2196C49.9376 3.33321 49.7147 3.13382 49.712 2.84011Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7971 15.0708H15.1353C14.8828 15.0547 14.6787 14.8633 14.6599 14.6181V0.916194C14.6599 0.641347 14.8882 0.423086 15.1729 0.423086H17.6521C17.9126 0.436558 18.1195 0.633263 18.1356 0.883859V2.67306H18.1866C18.8312 0.943139 20.0507 0.134766 21.6891 0.134766C23.3544 0.134766 24.3966 0.943139 25.1433 2.67306C25.7906 0.943139 27.2545 0.134766 28.8204 0.134766C29.9378 0.134766 31.1572 0.595539 31.9012 1.63565C32.7446 2.78893 32.5727 4.46226 32.5727 5.9335L32.57 14.5831C32.57 14.8553 32.3417 15.0762 32.057 15.0762H29.3979C29.1293 15.06 28.9198 14.8472 28.9198 14.5831V7.31582C28.9198 6.73918 28.9708 5.29758 28.8446 4.75058C28.6458 3.82634 28.0495 3.56766 27.2787 3.56766C26.6313 3.56766 25.9625 4.00149 25.6886 4.6913C25.4146 5.38381 25.4414 6.53709 25.4414 7.31582V14.5777C25.4414 14.8499 25.2131 15.0708 24.9284 15.0708H22.2693C22.0007 15.0547 21.7912 14.8418 21.7912 14.5777L21.7885 7.31043C21.7885 5.7826 22.0356 3.53263 20.1501 3.53263C18.2376 3.53263 18.3102 5.72332 18.3102 7.31043V14.575C18.3102 14.8526 18.0819 15.0708 17.7971 15.0708Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M66.9936 0.13205C70.9447 0.13205 73.0801 3.5353 73.0801 7.8628C73.0801 12.0448 70.7191 15.3618 66.9936 15.3618C63.1178 15.3618 61.0066 11.9586 61.0066 7.71998C61.0066 3.44908 63.1419 0.13205 66.9936 0.13205ZM67.0178 2.93172C65.0544 2.93172 64.9308 5.61282 64.9308 7.28616C64.9308 8.95949 64.9066 12.5352 66.9936 12.5352C69.0565 12.5352 69.1559 9.652 69.1559 7.89244C69.1559 6.73916 69.1075 5.35414 68.7583 4.25745C68.4602 3.30357 67.8639 2.93172 67.0178 2.93172Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2053 15.0708H75.5543C75.2884 15.0547 75.0762 14.8418 75.0762 14.5777L75.0708 0.867709C75.0923 0.617113 75.3152 0.420409 75.5811 0.420409H78.0496C78.2832 0.433882 78.4739 0.590168 78.5223 0.803039V2.89942H78.5733C79.32 1.02399 80.3622 0.129395 82.1994 0.129395C83.392 0.129395 84.5604 0.560527 85.3044 1.74614C86.0001 2.84284 86.0001 4.68862 86.0001 6.01436V14.6397C85.9705 14.8822 85.7529 15.0708 85.4897 15.0708H82.8225C82.5754 15.0547 82.3767 14.8741 82.3498 14.6397V7.19997C82.3498 5.69909 82.5244 3.5084 80.6845 3.5084C80.0372 3.5084 79.4409 3.94222 79.1427 4.60509C78.7694 5.4431 78.721 6.27842 78.721 7.20266V14.5777C78.7184 14.8526 78.4901 15.0708 78.2053 15.0708Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M42.7396 8.52571C42.7396 9.56582 42.7637 10.4335 42.24 11.3577C41.8156 12.1095 41.1441 12.5703 40.3974 12.5703C39.3767 12.5703 38.7777 11.7888 38.7777 10.6329C38.7777 8.35865 40.811 7.94637 42.7369 7.94637V8.52571H42.7396ZM45.4228 15.0385C45.2483 15.1975 44.9931 15.2083 44.7943 15.1005C43.9106 14.3622 43.7522 14.0226 43.2687 13.3221C41.8075 14.8149 40.7734 15.2622 38.8798 15.2622C36.6397 15.2622 34.8965 13.8744 34.8965 11.099C34.8965 8.93259 36.0676 7.45596 37.7356 6.73381C39.1806 6.09789 41.1978 5.98203 42.7422 5.80957V5.46197C42.7422 4.82605 42.7906 4.07426 42.4172 3.52457C42.0922 3.03416 41.4718 2.82937 40.9238 2.82937C39.9085 2.82937 39.006 3.35212 38.7831 4.43264C38.7374 4.67246 38.5629 4.91228 38.3211 4.92306L35.7399 4.64282C35.5223 4.59432 35.2806 4.41917 35.3424 4.08504C35.936 0.948553 38.7616 6.10352e-05 41.2945 6.10352e-05C42.5891 6.10352e-05 44.284 0.347662 45.3047 1.32849C46.5993 2.54105 46.4758 4.16049 46.4758 5.92544V10.0859C46.4758 11.3389 46.9942 11.8858 47.4803 12.5595C47.6495 12.802 47.6898 13.0903 47.4723 13.2682C46.9297 13.7262 45.9627 14.567 45.4309 15.0412L45.4228 15.0385Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84307 8.52565C7.84307 9.56576 7.86724 10.4334 7.34616 11.3577C6.92446 12.1094 6.25028 12.5702 5.50358 12.5702C4.4829 12.5702 3.88393 11.7888 3.88393 10.6328C3.88393 8.35858 5.91722 7.94631 7.84307 7.94631V8.52565ZM10.5264 15.0384C10.3518 15.1974 10.0966 15.2082 9.89784 15.1004C9.01416 14.3621 8.85568 14.0226 8.37221 13.322C6.91103 14.8148 5.87693 15.2621 3.98331 15.2621C1.7432 15.2621 0 13.8744 0 11.099C0 8.93253 1.17109 7.4559 2.83908 6.73375C4.28414 6.09783 6.30131 5.98197 7.84307 5.80951V5.46191C7.84307 4.82599 7.8941 4.0742 7.52075 3.52451C7.19575 3.0341 6.57528 2.82931 6.02734 2.82931C5.01204 2.82931 4.10955 3.35206 3.88662 4.43258C3.84095 4.6724 3.66637 4.91222 3.42463 4.923L0.846084 4.64276C0.62852 4.59426 0.386781 4.41911 0.448559 4.08498C1.03948 0.948492 3.86513 0 6.40069 0C7.69534 0 9.38751 0.347601 10.4109 1.32843C11.7055 2.54099 11.582 4.16043 11.582 5.92538V10.0858C11.582 11.3388 12.1003 11.8858 12.5865 12.5594C12.7557 12.8019 12.796 13.0903 12.5785 13.2681C12.0359 13.7262 11.0689 14.5669 10.5371 15.0411L10.5264 15.0384Z" fill="black"/>
                </svg>
              </li>
              
            </ul>
          </ResponsiveContainer>
        </div>

        <section class="overview">
          <ResponsiveContainer>
            <div class="two-col">
              <hgroup>
                <h2><strong>Build once.</strong> Use anywhere.</h2>
              </hgroup>

              <ul class="list--unstyled list--icon">
                <li><app-icon name="checkmark"/> Web Component-based</li>
                <li><app-icon name="checkmark"/> Any framework</li>
                <li><app-icon name="checkmark"/> TypeScript support</li>
                <li><app-icon name="checkmark"/> Sandboxing baked in</li>
                <li><app-icon name="checkmark"/> Dependency free</li>
                <li><app-icon name="checkmark"/> UI-independent</li>
              </ul>
            </div>
          </ResponsiveContainer>

          <div class="cta">
            <div class="cta__primary">
              <h3>Getting started is simple:</h3>
              <code class={{'copied': this.copiedState > 0}} onClick={this.copyCommand}>{COPY_STATES[this.copiedState]}</code>
              <span>Requires <stencil-route-link url="/docs/getting-started">NPM v6</stencil-route-link></span>
            </div>
            <p class="cta__secondary">Dive deeper with our <stencil-route-link url="/docs/getting-started">Getting Started</stencil-route-link> guide</p>
          </div>
        </section>

        <section class="gradient-bg">
          <ResponsiveContainer>
            <h2><strong>Appkit embraces Web Components.</strong> And make them click.</h2>
            <ul class="feature-list list--unstyled">
              <li class="feature-list__item">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#141334"/>
                  <path d="M16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3>Simple</h3>
                <p>With a tiny Api layer, and zero configuration, Appkit makes it a sweet deal to create integratable and shareable apps for the web.</p>
              </li>
              <li class="feature-list__item">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M32 9.44131C32 11.9453 30.9989 14.3467 29.2168 16.1173L18.5481 26.7486H7.32378L12.8017 21.306H20.4702C21.2663 21.306 21.9116 20.6645 21.9116 19.8732C21.9116 19.0819 21.2663 18.4404 20.4702 18.4404H15.686L23.9875 10.1925C24.5505 9.63308 24.5507 8.72586 23.988 8.16617C23.4252 7.60647 22.5125 7.60625 21.9495 8.16566L5.09347 24.9129V13.3809L15.778 2.76529C17.5601 0.994706 19.9771 0 22.4974 0C25.0177 0 27.4347 0.994706 29.2168 2.76529C30.9989 4.53588 32 6.93732 32 9.44131ZM5.09347 24.9129V26.7486H7.32378L2.46041 31.5806C1.89736 32.14 0.9847 32.1398 0.421929 31.5801C-0.140841 31.0204 -0.140614 30.1132 0.422437 29.5537L5.09347 24.9129Z" fill="#141334"/>
                </svg>
                <h3>Lightweight</h3>
                <p>A tiny codebase, standards based, and the raw power of native Web Components make Appkit the go to framework for integrateable Web Apps.</p>
              </li>
              <li class="feature-list__item">
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 12.1808 29.2223 9.54324 27.8696 7.2902L31.5477 3.66785C32.1512 3.07346 32.1507 2.11024 31.5466 1.51645C30.9424 0.922648 29.9634 0.923129 29.3599 1.51752L26.0119 4.81476C23.2719 1.85374 19.3524 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM26.0119 4.81476L13.9602 16.6839L10.1062 12.8921C9.5024 12.298 8.52339 12.298 7.91955 12.8921C7.31572 13.4862 7.31572 14.4494 7.91955 15.0435L12.8675 19.9116C13.1575 20.1969 13.551 20.3572 13.9612 20.3571C14.3714 20.357 14.7648 20.1965 15.0547 19.911L27.8696 7.2902C27.3358 6.40101 26.7124 5.5717 26.0119 4.81476Z" fill="#141334"/>
                </svg>
                <h3>Future proof</h3>
                <p>Build cross-framework apps on open web standards, and break free of Framework Churn and monolith UI's.</p>
              </li>
            </ul>
          </ResponsiveContainer>
        </section>

        <section>
          <ResponsiveContainer>
            <div class="two-col">
              <hgroup>
                <h2>The perfect framework for <strong>building apps for the web.</strong></h2>
              </hgroup>
              <div>
                <ul class="list--icon list--unstyled">
                  <li><app-icon name="checkmark"/>Ensure consistent communication between Web Components</li>
                  <li><app-icon name="checkmark"/>Appkit ensures deep and secure integration for Web Components</li>
                  <li><app-icon name="checkmark"/>Build apps that works across teams and projects</li>
                </ul>
                <p>Interested in learning more about building apps with AppKit?</p>
                <stencil-route-link anchorClass="btn btn--tertiary btn--small" url="/docs/stencil-for-design-systems">Show me more</stencil-route-link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        <section>
          <ResponsiveContainer>
            <div class="two-col">
              <hgroup>
                <h2><strong>Build reusable apps</strong> for all of your UI's using any framework.</h2>
              </hgroup>
              <div>
                <p>Appkit is built on Web Components standard, so yout apps work with any major framework or no framework at all.</p>
                <p>Learn how to build apps with:</p>
                <ul class="card-links list--unstyled">
                  <li>
                    <stencil-route-link class="card-links__item" url="/docs/react">
                      <i class="fw-icon fw-icon--react"></i>
                      React
                    </stencil-route-link>
                  </li>
                  <li>
                    <stencil-route-link class="card-links__item" url="/docs/angular">
                      <i class="fw-icon fw-icon--angular"></i>
                      Angular
                    </stencil-route-link>
                  </li>
                  <li>
                    <stencil-route-link class="card-links__item" url="/docs/vue">
                      <i class="fw-icon fw-icon--vue"></i>
                      Vue
                    </stencil-route-link>
                  </li>
                  <li>
                    <stencil-route-link class="card-links__item" url="/docs/ember">
                      <i class="fw-icon fw-icon--ember"></i>
                      Ember
                    </stencil-route-link>
                  </li>
                  <li>
                    <stencil-route-link class="card-links__item" url="/docs/vanilla">
                      <i class="fw-icon fw-icon--js"></i>
                      Vanilla Js
                    </stencil-route-link>
                  </li>
                </ul>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        <section class="stencil-story">
          <ResponsiveContainer>
            <h2><strong>The Appkit story</strong></h2>
            <p>Appkit was created to help sharing and reuse Web Components much more easily.</p>
            <div class="videos">
              <a href="https://youtu.be/RZ6MLELGsD8" class="video-thumbnail video-thumbnail--architecting">
                <app-icon name="play"/>
                <span>Architecting A an App Framework</span>
              </a>
              <a href="https://youtu.be/M1F81V-NhP0" class="video-thumbnail video-thumbnail--announcement">
                <app-icon name="play"/>
                <span>See the release announcement</span>
              </a>
              <a href="https://youtu.be/UfD-k7aHkQE" class="video-thumbnail video-thumbnail--launch">
                <app-icon name="play"/>
                <span>Watch launch video</span>
              </a>
            </div>
          </ResponsiveContainer>
        </section>

      </div>
    );
  }
}

const COPY_STATES = [
  '$ npm init @apaq/appkit',
  'copied!',
  'double copied!',
  'triple copied!',
  'super copied!',
  'hyper copied!!!',
  'definitively copied',
  'seriously?',
  'trust me, it\'s copied',
  'you can paste it already',
  'PLEASE STOP',
  'STOP POKING MEEEEEE',
  'ok, i am out'
];
