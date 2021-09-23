package com.payment.web.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.payment.web.beans.Currency;
import com.payment.web.beans.Message;
import com.payment.web.beans.Transfertypes;
import com.payment.web.repository.CurrencyRepository;
import com.payment.web.repository.TransferTypesRepository;

@Service
public class TransfertypesService {
	@Autowired
	private TransferTypesRepository transferTypeRepository;
	
	public Transfertypes getTransferTypesByCode(String transfertypecode) {
		try {
			Optional<Transfertypes> transfertypes = this.transferTypeRepository.findById(transfertypecode);;

			return transfertypes.orElseThrow(()->{
	
				return new EntityNotFoundException("Transfer Type with "+transfertypecode + " does not exist");
			});

		}catch(IllegalArgumentException e )
		{
			return null;
		} 
	}
	public List<Transfertypes> getAllTransfertypes() {
		List<Transfertypes> c = new ArrayList<Transfertypes>();
		c = (List<Transfertypes>) this.transferTypeRepository.findAll();
		return c;
	}

}
