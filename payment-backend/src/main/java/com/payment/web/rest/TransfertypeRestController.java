package com.payment.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.payment.web.beans.Transfertypes;
import com.payment.web.service.TransfertypesService;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/transfertypes")
public class TransfertypeRestController {
	
	@Autowired
	private TransfertypesService transfertypeservice;
	
	@GetMapping
	public List<Transfertypes> findTransfertypes(){
		return this.transfertypeservice.getAllTransfertypes();
	}

}
