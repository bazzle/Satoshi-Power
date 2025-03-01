import Utilities from "./Utilities.js";

const SkullSvg = `<svg width="16" height="18" viewBox="0 0 170 191" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M84.3872 0.00779081C70.2478 0.912945 43.1855 8.26519 24.6986 19.8045C-9.3947 43.1257 -0.988663 81.8002 7.76819 100.263C11.9162 109.008 16.7591 122.768 13.0228 135.828C9.6869 147.488 14.1899 155.068 17.1088 157.983C19.301 160.172 25.1154 160.717 31.8315 161.347C34.0579 161.556 36.3841 161.774 38.7096 162.064C48.0502 163.23 51.553 167.312 52.1368 170.81C52.6038 173.608 52.3313 180.138 52.1368 183.053C55.6103 185.944 66.8919 190.555 84.3872 190.632C84.4609 190.632 84.5345 190.633 84.6081 190.633C84.6816 190.633 84.7552 190.633 84.829 190.633C102.324 190.556 113.606 185.944 117.079 183.053C116.885 180.138 116.612 173.608 117.079 170.81C117.663 167.312 121.166 163.23 130.507 162.064C132.832 161.774 135.158 161.556 137.384 161.347C144.1 160.717 149.915 160.172 152.107 157.983C155.026 155.068 159.529 147.488 156.193 135.828C152.457 122.768 157.3 109.008 161.448 100.263C170.205 81.8002 178.611 43.1257 144.518 19.8045C126.031 8.26519 98.9683 0.912945 84.829 0.00779081C84.677 -0.0037069 84.5331 -0.00142447 84.3872 0.00779081ZM84.6081 124.752C94.4153 124.933 101.317 137.111 101.317 152.736C101.317 161.331 89.7849 160.383 84.829 159.254V159.149C84.7571 159.167 84.6835 159.185 84.6081 159.203C84.5327 159.185 84.459 159.167 84.3872 159.149V159.254C79.4313 160.383 67.8989 161.331 67.8989 152.736C67.8989 137.111 74.801 124.933 84.6081 124.752ZM146.435 95.4339C145.034 73.9784 126.42 71.1113 116.495 71.1114C106.571 71.1115 94.1452 74.1913 94.8952 89.7684C95.8273 109.127 114.327 115.84 128.338 116.423C142.349 117.006 147.603 105.929 146.435 95.4339ZM22.781 95.4339C24.1821 73.9784 42.7961 71.1113 52.7207 71.1114C62.6454 71.1115 75.0709 74.1913 74.3209 89.7684C73.3888 109.127 54.8895 115.84 40.8785 116.423C26.8676 117.006 21.6134 105.929 22.781 95.4339Z" fill="white"/></svg>`;

const createIcon = (svg) => {
	const iconContainer = Utilities.buildElement('div','icon');
	iconContainer.innerHTML = svg
	return iconContainer
}

export {SkullSvg, createIcon};