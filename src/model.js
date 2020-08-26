import image from './img/04.png'

export const model = [
	{
		type: 'title', value: 'Конструктор сайтов на чистом JavaScript', options: {
			tag: 'h2',
			styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
		}
	},
	{
		type: 'image', value: image, options: {
			styles: 'max-width: 100%;'
		}
	},
	{
		type: 'text', value: 'Создавайте любые формы и блоки быстро! Надежный и понятный интерфейс конструктора создан на чистом JavaScript с применением html-фреймворка Bootstrap!', options: {
			styles: 'background: linear-gradient(to right, #1e8ae8, #0951d6); color:hsla(60, 100%, 50%, 0.82);text-align: center;font-size:24px;font-weight:700;'
		}
	},
	{
		type: 'textColumns', value: [
			'Возможность компоновать блоки как угодно, используя готовые шаблоны и создавая свои',
			'Интуитивно понятный интерфейс с большим набором функций',
			'Создавайте современные сайты быстро и без знания программирования',
			'Экономьте время! Сосредоточьтесь на главном - на своем бизнесе, а создание сайта поручите нашей системе.',
		], options: {
			styles: 'padding: 1rem; background: linear-gradient(to right, #fae561, #32c8e3); color:#383b32;text-align: center;font-size:24px;'
		}
	},
]