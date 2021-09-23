package com.payment.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.payment.web.beans.Message;
import com.payment.web.service.MessageService;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/messagecodes")
public class MessagecodeRestController {
	
	@Autowired
	private MessageService messageservice;
	
	@GetMapping
	public List<Message> findMessagecodes()
	{
		return this.messageservice.getAllMessageCodes();
	}

	//add/msg
} 
