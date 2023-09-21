import React from 'react';
import iitdlogo from '../../media/iitd.png';
import './footer.css';

function Footer() {
	return (
		<footer>
			<div class='row footer-row mt-4'>
				<div class='col-md-6 footer-div footer-div-left' align='left'>
					<div id='companyinfo'>
						<div id='sitelink'>
							<img src={iitdlogo} id='footer-iitd' alt='iitd-logo' height='59px' />
							<h4 id='footer-title'>
								<b>Academic Outreach and New Initiatives </b>
							</h4>
							<h5 id='footer-subtitle'>Indian Institute of Technology Delhi</h5>
						</div>
						<p id='title'>
							3B 18, Block III,
							<br />
							IIT Delhi, Hauz Khas, New Delhi,
							<br />
							Delhi 110016
						</p>
					</div>
				</div>
				<div class='col-md-6 footer-div footer-div-right' align='right'>
					<div id='Contact'>
						<b>
							<p id='txt2'>Contact Us</p>
						</b>
						<p id='contactus'>
							Associate Dean-Academics <br />
							(Outreach and New Initiatives)
							<br />
						</p>
						<div id='contacts'>
							<a href='mailto:acadoutreach@iitd.ac.in' class='footer-email'>
								acadoutreach@iitd.ac.in
							</a>
							,{' '}
							<a href='mailto:adoni@iitd.ac.in' class='footer-email'>
								adoni@iitd.ac.in
							</a>
							{'  '}
							<svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M3.07691 3.07678H15.3846C16.2308 3.07678 16.9231 3.76909 16.9231 4.61524V13.846C16.9231 14.6922 16.2308 15.3845 15.3846 15.3845H3.07691C2.23076 15.3845 1.53845 14.6922 1.53845 13.846V4.61524C1.53845 3.76909 2.23076 3.07678 3.07691 3.07678Z'
									stroke='white'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M16.9231 4.61523L9.23076 9.99985L1.53845 4.61523'
									stroke='white'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
							<br />
							<a href='tel:+911126548720' class='footer-email'>
								+91-11-2654-8720
							</a>
							,{' '}
							<a href='tel:+911126548726' class='footer-email'>
								8726 (O)
							</a>
							{'  '}
							<svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M16.9231 13.0152V15.3229C16.924 15.5371 16.8801 15.7492 16.7943 15.9455C16.7084 16.1418 16.5826 16.318 16.4247 16.4628C16.2668 16.6076 16.0805 16.7179 15.8775 16.7865C15.6746 16.8552 15.4595 16.8806 15.2462 16.8614C12.8791 16.6042 10.6054 15.7953 8.60771 14.4998C6.74912 13.3188 5.17335 11.743 3.99232 9.88444C2.69231 7.87767 1.88328 5.59289 1.63079 3.21521C1.61156 3.00249 1.63684 2.7881 1.70502 2.58569C1.77319 2.38327 1.88276 2.19727 2.02676 2.03953C2.17076 1.88178 2.34602 1.75575 2.54139 1.66945C2.73677 1.58316 2.94797 1.53848 3.16156 1.53828H5.46925C5.84256 1.53461 6.20447 1.6668 6.48753 1.91023C6.77058 2.15366 6.95546 2.4917 7.00771 2.86136C7.10511 3.59987 7.28575 4.325 7.54617 5.0229C7.64967 5.29822 7.67206 5.59745 7.61071 5.88511C7.54936 6.17278 7.40683 6.43683 7.20002 6.64598L6.22309 7.6229C7.31814 9.5487 8.91267 11.1432 10.8385 12.2383L11.8154 11.2614C12.0245 11.0545 12.2886 10.912 12.5763 10.8507C12.8639 10.7893 13.1632 10.8117 13.4385 10.9152C14.1364 11.1756 14.8615 11.3563 15.6 11.4537C15.9737 11.5064 16.3149 11.6946 16.5589 11.9825C16.8028 12.2704 16.9325 12.638 16.9231 13.0152Z'
									stroke='white'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
					</div>
					<b>
						<p id='txt3'>Follow Us</p>
					</b>
					<a href='https://www.youtube.com/c/IITDelhiOfficial' target='_blank' rel='noreferrer'>
						<svg
							class='sicon'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12001 4 3.40001 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.5788 5.98541 1.46001 6.46C1.14522 8.20556 0.991243 9.97631 1.00001 11.75C0.988786 13.537 1.14277 15.3213 1.46001 17.08C1.59097 17.5398 1.83831 17.9581 2.17815 18.2945C2.51799 18.6308 2.93883 18.8738 3.40001 19C5.12001 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42V6.42Z'
								stroke='white'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M9.75 15.02L15.5 11.75L9.75 8.47998V15.02Z'
								stroke='white'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</a>
					<a href='https://www.facebook.com/IITDelhi/' target='_blank' rel='noreferrer'>
						<svg
							class='sicon'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M17.999 2H14.999C13.6729 2 12.4012 2.52678 11.4635 3.46447C10.5258 4.40215 9.99902 5.67392 9.99902 7V10H6.99902V14H9.99902V22H13.999V14H16.999L17.999 10H13.999V7C13.999 6.73478 14.1044 6.48043 14.2919 6.29289C14.4795 6.10536 14.7338 6 14.999 6H17.999V2Z'
								stroke='white'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</a>
					<a href='https://www.instagram.com/iitdelhi/' target='_blank' rel='noreferrer'>
						<svg
							class='sicon'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M16.999 2H6.99902C4.2376 2 1.99902 4.23858 1.99902 7V17C1.99902 19.7614 4.2376 22 6.99902 22H16.999C19.7604 22 21.999 19.7614 21.999 17V7C21.999 4.23858 19.7604 2 16.999 2Z'
								stroke='white'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M15.999 11.3701C16.1224 12.2023 15.9803 13.0523 15.5928 13.7991C15.2053 14.5459 14.5922 15.1515 13.8407 15.5297C13.0891 15.908 12.2375 16.0397 11.4068 15.906C10.5762 15.7723 9.8088 15.3801 9.21387 14.7852C8.61895 14.1903 8.22677 13.4229 8.0931 12.5923C7.95944 11.7616 8.0911 10.91 8.46936 10.1584C8.84762 9.40691 9.45322 8.7938 10.2 8.4063C10.9468 8.0188 11.7968 7.87665 12.629 8.00006C13.478 8.12594 14.2639 8.52152 14.8707 9.12836C15.4776 9.73521 15.8732 10.5211 15.999 11.3701Z'
								stroke='white'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path d='M17.499 6.5H17.509' stroke='white' stroke-linecap='round' stroke-linejoin='round' />
						</svg>
					</a>
					<a href='https://twitter.com/iitdelhi' target='_blank' rel='noreferrer'>
						<svg
							class='sicon'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clip-path='url(#clip0_9_180)'>
								<path
									d='M22.999 3.00005C22.0414 3.67552 20.9811 4.19216 19.859 4.53005C19.2568 3.83756 18.4564 3.34674 17.5661 3.12397C16.6758 2.90121 15.7385 2.95724 14.8811 3.2845C14.0237 3.61176 13.2875 4.19445 12.772 4.95376C12.2565 5.71308 11.9867 6.61238 11.999 7.53005V8.53005C10.2417 8.57561 8.5003 8.18586 6.93003 7.39549C5.35977 6.60513 4.00934 5.43868 2.99902 4.00005C2.99902 4.00005 -1.00098 13 7.99902 17C5.93955 18.398 3.48618 19.099 0.999023 19C9.99902 24 20.999 19 20.999 7.50005C20.9981 7.2215 20.9713 6.94364 20.919 6.67005C21.9396 5.66354 22.6599 4.39276 22.999 3.00005V3.00005Z'
									stroke='white'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</g>
							<defs>
								<clipPath id='clip0_9_180'>
									<rect width='24' height='24' fill='white' transform='translate(-0.000976562)' />
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
			</div>
			<div id='part2'>Copyright © 2022 Academic Outreach, IIT Delhi. All Rights Reserved.</div>
		</footer>
	);
}

export default Footer;
