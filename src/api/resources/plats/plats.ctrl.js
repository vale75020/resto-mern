import Plat from './plats.model';
import jwt from '../../helpers/jwt';
import gravatar from "gravatar";

export default {

    async create(req, res){

      try {

        const { value, error } = (req.body, Plat)
        if(error && error.details){
          return res.status(400).json(error)
        }

        const plat = await Plat.create({
          name: req.body.name,
          text: req.body.text,
          price: req.body.price
        });
        
        return res.json(plat)
        
      } catch(err){
        console.error(err)
        return res.status(500).send(err)
      }
    },
    async findAll(req, res){
      try{
        const plat = await Plat.find({})
        res.json(plat)
      }catch (e) {
        console.error(e)
          return res.status(500).send(e)
        }
    },
    async findOne(req, res){
      try{
        const{ id } = req.params
         const plat = await Plat.findById(id)
        if(!plat){
          return res.status(404).json({err:'could not find this dish'})
        }
        return res.json(plat)
      }catch (err){
        console.error(err)
        return res.status(500).send(err)
      }
    },
    async update(req, res){
      try {
        const { id } = req.params;
        const { value, error } = (req.body)
        if(error && error.details){
          return res.status(400).json(error)
        }
        const plat = await Plat.findOneAndUpdate({_id: id}, req.body, {new: true})
        if(!plat){
          return res.status(404).json({err: 'could not find the dish'})
        }
        return res.json(plat)
      } catch(err){
        console.error(err)
        return res.status(500).send(err)
      }
    },
    async delete(req, res){
      try {
        const { id } = req.params
        const plat = await Plat.findOneAndRemove({_id:id})
        if(!plat){
          return res.status(404).json({err: 'could not find the plat'})
        }
        return res.json(plat)
      } catch(err){
        console.error(err)
        return res.status(500).send(err)
        }
    }
  }
  

