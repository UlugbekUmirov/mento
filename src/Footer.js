import logo from "./img/mentologowhite.svg";
import instagram from "./img/inst.svg";
import facebook from "./img/icon-social-2.svg";
import twitter from "./img/icon-social-3.svg";
import linkedin from "./img/icon-social-4.svg";
export default function Footer() {
  return (
    <div className="footer ">
      <div className="container content-footer">
        <div className="footer-title">
          © {new Date().getFullYear()}Mento.
          <p>All rights reserved</p>
        </div>
        <div className="footer-title">
          <img src={logo} alt="" />
          <p>Образовательная платформа №1 по качеству обучения.</p>
        </div>
        <div className="footer-icons">
          <a href="https://www.facebook.com/uulugbe" target="__blank">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle
                opacity="0.15"
                cx="18"
                cy="18"
                r="18"
                fill="white"
              ></circle>
              <g clip-path="url(#clip0_63_1379)">
                <path
                  d="M13 16V20H16V27H20V20H23L24 16H20V14C20 13.7348 20.1054 13.4804 20.2929 13.2929C20.4804 13.1054 20.7348 13 21 13H24V9H21C19.6739 9 18.4021 9.52678 17.4645 10.4645C16.5268 11.4021 16 12.6739 16 14V16H13Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_63_1379">
                  <rect
                    fill="white"
                    height="24"
                    transform="translate(6 6)"
                    width="24"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://www.instagram.com/um1rov.06/" target="__blank">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle
                opacity="0.15"
                cx="18"
                cy="18"
                r="18"
                fill="white"
              ></circle>
              <g clip-path="url(#clip0_63_1372)">
                <path
                  d="M22 10H14C11.7909 10 10 11.7909 10 14V22C10 24.2091 11.7909 26 14 26H22C24.2091 26 26 24.2091 26 22V14C26 11.7909 24.2091 10 22 10Z"
                  fill="white"
                ></path>
                <path
                  d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
                  stroke="#303030"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M22.5 13.5V13.501"
                  stroke="#303030"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_63_1372">
                  <rect
                    fill="white"
                    height="24"
                    transform="translate(6 6)"
                    width="24"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="" target="__blank">
            <svg fill="none" height="36" viewBox="0 0 29 29" width="36">
              <circle
                opacity="0.15"
                cx="14.4995"
                cy="14.5"
                r="14.5"
                fill="#ffffff"
              ></circle>
              <g clip-path="url(#clip0_3001_7860)">
                <path
                  clip-rule="evenodd"
                  d="M20.7597 9.2489C21.445 9.43347 21.9854 9.97375 22.1699 10.6592C22.5126 11.9111 22.4994 14.5207 22.4994 14.5207C22.4994 14.5207 22.4994 17.117 22.17 18.3691C21.9854 19.0544 21.4451 19.5948 20.7597 19.7793C19.5076 20.1088 14.4995 20.1088 14.4995 20.1088C14.4995 20.1088 9.50438 20.1088 8.23925 19.7662C7.55383 19.5816 7.01355 19.0412 6.82898 18.3559C6.49951 17.117 6.49951 14.5075 6.49951 14.5075C6.49951 14.5075 6.49951 11.9111 6.82898 10.6592C7.01343 9.97387 7.56701 9.42029 8.23913 9.23584C9.4912 8.90625 14.4994 8.90625 14.4994 8.90625C14.4994 8.90625 19.5076 8.90625 20.7597 9.2489ZM17.0695 14.5076L12.9048 16.9062V12.1089L17.0695 14.5076Z"
                  fill-rule="evenodd"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_3001_7860">
                  <rect
                    fill="white"
                    height="16"
                    transform="translate(6.49951 6.5)"
                    width="16"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="" target="__blank">
            <svg fill="none" height="36" viewBox="0 0 29 29" width="36">
              <circle
                opacity="0.15"
                cx="14.5"
                cy="14.5"
                r="14.5"
                fill="white"
              ></circle>
              <path
                d="M21.5095 11.0117C20.5964 11.0117 19.7539 10.7092 19.0773 10.1989C18.3014 9.61391 17.7439 8.75578 17.547 7.76672C17.4982 7.52234 17.472 7.27016 17.4695 7.01172H14.861V14.1392L14.8579 18.0433C14.8579 19.087 14.1782 19.972 13.236 20.2833C12.9626 20.3736 12.6673 20.4164 12.3598 20.3995C11.9673 20.378 11.5995 20.2595 11.2798 20.0683C10.5995 19.6614 10.1382 18.9233 10.1257 18.0789C10.106 16.7592 11.1729 15.6833 12.4917 15.6833C12.752 15.6833 13.002 15.7258 13.236 15.803V13.8548V13.1545C12.9892 13.118 12.7379 13.0989 12.4839 13.0989C11.0404 13.0989 9.69042 13.6989 8.72542 14.7798C7.99605 15.5967 7.55855 16.6389 7.49105 17.7317C7.40261 19.1673 7.92792 20.532 8.94667 21.5389C9.09636 21.6867 9.25355 21.8239 9.41792 21.9505C10.2914 22.6227 11.3592 22.987 12.4839 22.987C12.7379 22.987 12.9892 22.9683 13.236 22.9317C14.2867 22.7761 15.256 22.2952 16.021 21.5389C16.961 20.6098 17.4804 19.3764 17.486 18.0636L17.4726 12.2336C17.921 12.5795 18.4114 12.8658 18.9376 13.088C19.756 13.4333 20.6239 13.6083 21.517 13.608V11.7139V11.0111C21.5176 11.0117 21.5101 11.0117 21.5095 11.0117Z"
                fill="white"
              ></path>
            </svg>
          </a>
          <a href="https://t.me/uulugbe" target="__blank">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
              <rect
                width="32"
                height="32"
                rx="16"
                fill="#ffffff"
                opacity="0.15"
              ></rect>
              <path
                d="M22.4 10.0814L19.9956 22.6334C19.9956 22.6334 19.6592 23.5037 18.7351 23.0863L13.1876 18.6817L13.1619 18.6687C13.9112 17.9719 19.7219 12.5617 19.9758 12.3165C20.369 11.9367 20.1249 11.7106 19.6684 11.9975L11.0854 17.642L7.77406 16.4882C7.77406 16.4882 7.25296 16.2963 7.20283 15.8789C7.15203 15.4608 7.79121 15.2347 7.79121 15.2347L21.2905 9.75077C21.2905 9.75077 22.4 9.24595 22.4 10.0814Z"
                fill="#ffffff"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
