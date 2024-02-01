import React from 'react';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './pages/mainPage/MainPage';
import NewsPage from './pages/newsPage/NewsPage';
import AboutUsPage from './pages/aboutUsPage/AboutUsPage';
import ApplicationCriminalCodePage from './pages/applicationCriminalCodePage/ApplicationCriminalCodePage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import DocsPage from './pages/docsPage/DocsPage';
import FaqPage from './pages/faqPage/FaqPage';
import FundPage from './pages/fundPage/FundPage';
import PaymentOfUtilityServices from './pages/paymentOfUtilityServices/PaymentOfUtilityServices';
import PhotoPage from './pages/photoPage/PhotoPage';
import DirectContracts from './pages/directContracts/DirectContracts';
import RatesPage from './pages/ratesPage/RatesPage';
import ReportingPage from './pages/reportingPage/ReportingPage';
import ReviewsPage from './pages/reviewsPage/ReviewsPage';
import SubmitTestimonyPage from './pages/submitTestimonyPage/SubmitTestimonyPage';
const App = () => {
	return (
		<Router>
			<Header />
			<Routes basename="/Dom">
				<Route path="/" element={<MainPage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/photo" element={<PhotoPage />} />
				<Route path="/direct" element={<DirectContracts />} />
				<Route
					path="/payments"
					element={<PaymentOfUtilityServices />}
				/>
				<Route path="/faq" element={<FaqPage />} />
				<Route path="/contacts" element={<ContactsPage />} />
				{/* 




				 */}
				<Route path="/submit" element={<SubmitTestimonyPage />} />
				<Route
					path="/application"
					element={<ApplicationCriminalCodePage />}
				/>
				<Route path="/reviews" element={<ReviewsPage />} />
				<Route path="/aboutus" element={<AboutUsPage />} />
				<Route path="/rates" element={<RatesPage />} />
				{/* 




 */}

				<Route path="/fund" element={<FundPage />} />
				<Route path="/docs" element={<DocsPage />} />
				<Route path="/reporting" element={<ReportingPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
