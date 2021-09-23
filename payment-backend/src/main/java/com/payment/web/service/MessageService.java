package com.payment.web.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payment.web.beans.Message;
import com.payment.web.beans.Transfertypes;
import com.payment.web.repository.MessageRepository;
import com.payment.web.repository.TransferTypesRepository;

@Service
public class MessageService {
	@Autowired
	private MessageRepository messageRepository;
	
	public Message getMessageByCode(String messagecode) {
		try {
			Optional<Message> message = this.messageRepository.findById(messagecode);;

			return message.orElseThrow(()->{
	
				return new EntityNotFoundException("Message Type with "+messagecode + " does not exist");
			});

		}catch(IllegalArgumentException e )
		{
			return null;
		} 
	}
	public List<Message> getAllMessageCodes() {
		List<Message> c = new ArrayList<Message>();
		c = (List<Message>) this.messageRepository.findAll();
		return c;
	}

}
