package com.jake.whatToWatch.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BaseController {

    @RequestMapping("/name")
    public String nameRoute(){
        return "nameSearch";
    }

    @RequestMapping("/randomSelection")
    public String randomSelection(){
        return "randomSelection";
    }
    @RequestMapping("/randomMovie")
    public String randomMovie(){
        return "randomMovie";
    }

    @RequestMapping("/randomTV")
    public String randomTV(){
        return "randomTV";
    }

    @RequestMapping("/")
    public String baseRoute(){
        return "index";
    }
}
