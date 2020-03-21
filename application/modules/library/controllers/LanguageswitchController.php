<?php
class Library_LanguageswitchController extends Zend_Controller_Action{
	public function init(){
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender();
		
		$session = new Zend_Session_Namespace('zftutorial');
		$session->language = $this->_getParam('lang');
		
		$this->_redirect('index/index');
	}
}