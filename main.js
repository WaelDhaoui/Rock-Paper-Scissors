document.querySelector(".mode li:nth-child(2)").onclick = function() {
        if(getComputedStyle(this.previousElementSibling).opacity == "1") {
            this.firstElementChild.style.left = "49%";
            if(innerWidth <= "767")
                this.firstElementChild.style.left = "57%";
            this.previousElementSibling.style.opacity = "0.6";
            this.nextElementSibling.style.opacity = "1";
            document.querySelector("main").style.margin = "0% auto 8%";
            document.querySelector("header .img img").src = "images/logo-bonus.svg";
            document.querySelector("header .img img").parentElement.style.width = "15%";
            if(innerWidth <= "767") {
                document.querySelector("header .img").style.width = "20%";
                document.querySelector("header .img").style.marginLeft = "5px";
            }
            document.querySelector("aside > .img img").src = "images/image-rules-bonus.svg";
            document.querySelector("header p").textContent = "12";
            document.getElementsByClassName("easy")[0].style.display = "none";
            document.getElementsByClassName("hard")[0].style.display = "block";
            if(document.querySelector(".result").childElementCount !== 0) {
                document.querySelector(".result button").click();
            }
        } else {
            this.firstElementChild.style.left = "1%";
            this.previousElementSibling.style.opacity = "1";
            this.nextElementSibling.style.opacity = "0.6";
            document.querySelector("main").style.margin = "6% auto";
            document.querySelector("header .img img").src = "images/logo.svg";
            document.querySelector("header .img img").parentElement.style.width = "25%";
            if(innerWidth <= "767")
                document.querySelector("header .img").style.marginLeft = "0px";
            document.querySelector("aside > .img img").src = "images/image-rules.svg";
            document.querySelector("header p").textContent = "12";
            document.getElementsByClassName("easy")[0].style.display = "block";
            document.getElementsByClassName("hard")[0].style.display = "none";
            if(document.querySelector(".result").childElementCount !== 0) {
                document.querySelector(".result button").click();
            }
        }
    // }
    
}
document.querySelector("body > button").onclick = function() {
    document.querySelector("aside").style.display = "block";
    document.querySelectorAll(".mode li")[1].style.zIndex = "-1";
    document.querySelector("main").style.zIndex = "-1";
    document.querySelector("body > button").style.zIndex = "-1";
    document.querySelector("aside div .img").onclick = function() {
        this.parentElement.parentElement.style.display = "none";
        document.querySelectorAll(".mode li")[1].style.zIndex = "0";
        document.querySelector("main").style.zIndex = "0";
        document.querySelector("body > button").style.zIndex = "0";
    }
};

[...document.querySelector("main > div:first-child").children].forEach(function(ele) {
    ele.onclick = function() {
        var button = document.createElement("button");
        button.textContent = "Play Again";

        var house = document.createElement("div")
        house.className = "img";
        house.textContent = "3";
        house.style.cssText = "font-size: xxx-large; text-align: center; padding-top: 9%; border: none; box-shadow: none";
        if(innerWidth <= "767") 
            house.style.paddingTop = "6%";
        document.querySelector(".result").append(house);

        //new 
        var counter = setInterval(function() {
            house.textContent -= 1;
            if(house.textContent == "0") {
                clearInterval(counter);
                house.style.cssText = "";
                house.textContent = "";
                
                var i = Math.floor(Math.random() * 3);
                var img2 = document.querySelectorAll(".easy .img")[i].cloneNode(true);
                img2.style.border = getComputedStyle(document.querySelectorAll(".easy .img")[i]).border;
                img2.style.borderWidth = "22px";
                if(innerWidth <= "767")
                    img2.style.borderWidth = "16px";
                img2.style.boxShadow = getComputedStyle(document.querySelectorAll(".easy .img")[i]).boxShadow;
                img2.alt = "House";
                house.remove();
                document.querySelector(".result").append(img2);
            
                var p = document.createElement("p");

                if(img2.firstElementChild.src.includes("rock.svg")) {
                    if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("rock.svg")) {
                        p.textContent = "draw";
                        p.style.left = "42.5%"
                    }
                    else if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("paper.svg")) {
                        p.textContent = "you win";
                        document.querySelector("header p").textContent ++;
                    } else {
                        p.textContent = "you lose";
                        document.querySelector("header p").textContent -= 1;
                        button.style.color = "hsl(349, 70%, 56%)";
                    }
                } else if(img2.firstElementChild.src.includes("paper.svg")) {
                    if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("paper.svg")) {
                        p.textContent = "draw";
                        p.style.left = "42.5%"
                    }
                    else if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("scissors.svg")) {
                        p.textContent = "you win";
                        document.querySelector("header p").textContent ++;
                    } else {
                        p.textContent = "you lose";
                        document.querySelector("header p").textContent -= 1;
                        button.style.color = "hsl(349, 70%, 56%)";
                    }
                } else {
                    if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("scissors.svg")) {
                        p.textContent = "draw";
                        p.style.left = "42.5%"
                    }
                    else if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("rock.svg")) {
                        p.textContent = "you win";
                        document.querySelector("header p").textContent ++;
                    } else {
                        p.textContent = "you lose";
                        document.querySelector("header p").textContent -= 1;
                        button.style.color = "hsl(349, 70%, 56%)";
                    }
                }
                document.querySelector(".result .img:first-child").after(p);
                document.querySelector(".result > p").after(button);
                if(p.textContent.includes("draw") && innerWidth <= "767")
                    p.style.left = "37%"
                if(p.textContent.includes("lose") && innerWidth <= "767")
                p.style.left = "25%"
            }
        },1000);

        

        ele.parentElement.style.left = "-82%";
        if(innerWidth <= "767")
            ele.parentElement.style.left = "-97%";
        document.querySelector(".result").style.left = "50%";

        var img = ele.cloneNode(true);
        img.style.border = "22px solid";
        if(innerWidth <= "767")
            img.style.border = "16px solid";
        img.style.borderColor = getComputedStyle(ele).borderBlockColor;
        img.style.boxShadow = getComputedStyle(ele).boxShadow;
        document.querySelector(".result").prepend(img);

        setTimeout(() => {
            button.style.height = "auto";
            button.style.padding = getComputedStyle(document.querySelector("body > button")).padding;
        }, 5000);

        button.addEventListener("click", function() {
            ele.parentElement.style.left = "0%";
            document.querySelector(".result").style.left = "150%";
            setTimeout(function() {
                document.querySelector(".result > button").remove();
                document.querySelector(".result").firstElementChild.remove();
                document.querySelector(".result").lastElementChild.remove();
                document.querySelector(".result p").remove();
            },500);
        })
    }
});

[...document.querySelector("main > div:nth-child(2)").children].forEach(function(ele) {
    ele.onclick = function() {
        var button = document.createElement("button");
        button.textContent = "Play Again";

        var house = document.createElement("div")
        house.className = "img";
        house.textContent = "3";
        house.style.cssText = "font-size: xxx-large; text-align: center; padding-top: 9%; border: none; box-shadow: none";
        if(innerWidth <= "767") 
            house.style.paddingTop = "6%";
        document.querySelector(".result").append(house);

        //new 
        var counter = setInterval(function() {
            house.textContent -= 1;
            if(house.textContent == "0") {
                clearInterval(counter);
                house.style.cssText = "";
                house.textContent = "";
                
                var i = Math.floor(Math.random() * 5);
                var img2 = document.querySelectorAll(".hard .img")[i].cloneNode(true);
                img2.style.border = getComputedStyle(document.querySelectorAll(".hard .img")[i]).border;
                img2.style.borderWidth = "22px";
                if(innerWidth <= "767")
                    img2.style.borderWidth = "16px";
                img2.style.boxShadow = getComputedStyle(document.querySelectorAll(".hard .img")[i]).boxShadow;
                img2.alt = "House";
                house.remove();
                document.querySelector(".result").append(img2);
            
                var p = document.createElement("p");

                if(img2.firstElementChild.src.includes("rock.svg")) {
                    if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("rock.svg")) {
                        p.textContent = "draw";
                        p.style.left = "42.5%"
                    }
                    else if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("paper.svg") || document.querySelector(".result .img:first-child").firstElementChild.src.includes("spock.svg")) {
                        p.textContent = "you win";
                        document.querySelector("header p").textContent ++;
                    } else {
                        p.textContent = "you lose";
                        document.querySelector("header p").textContent -= 1;
                        button.style.color = "hsl(349, 70%, 56%)";
                    }
                } else if(img2.firstElementChild.src.includes("scissors.svg")) {
                    if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("scissors.svg")) {
                        p.textContent = "draw";
                        p.style.left = "42.5%"
                    }
                    else if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("rock.svg") || document.querySelector(".result .img:first-child").firstElementChild.src.includes("spock.svg")) {
                        p.textContent = "you win";
                        document.querySelector("header p").textContent ++;
                    } else {
                        p.textContent = "you lose";
                        document.querySelector("header p").textContent -= 1;
                        button.style.color = "hsl(349, 70%, 56%)";
                    }
                } else if(img2.firstElementChild.src.includes("paper.svg")) {
                    if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("paper.svg")) {
                        p.textContent = "draw";
                        p.style.left = "42.5%"
                    }
                    else if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("scissors.svg") || document.querySelector(".result .img:first-child").firstElementChild.src.includes("lizard.svg")) {
                        p.textContent = "you win";
                        document.querySelector("header p").textContent ++;
                    } else {
                        p.textContent = "you lose";
                        document.querySelector("header p").textContent -= 1;
                        button.style.color = "hsl(349, 70%, 56%)";
                    }
                } else if(img2.firstElementChild.src.includes("spock.svg")) {
                    if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("spock.svg")) {
                        p.textContent = "draw";
                        p.style.left = "42.5%"
                    }
                    else if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("paper.svg") || document.querySelector(".result .img:first-child").firstElementChild.src.includes("lizard.svg")) {
                        p.textContent = "you win";
                        document.querySelector("header p").textContent ++;
                    } else {
                        p.textContent = "you lose";
                        document.querySelector("header p").textContent -= 1;
                        button.style.color = "hsl(349, 70%, 56%)";
                    }
                }
                else {
                    if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("lizard.svg")) {
                        p.textContent = "draw";
                        p.style.left = "42.5%"
                    }
                    else if(document.querySelector(".result .img:first-child").firstElementChild.src.includes("rock.svg") || document.querySelector(".result .img:first-child").firstElementChild.src.includes("scissors.svg")) {
                        p.textContent = "you win";
                        document.querySelector("header p").textContent ++;
                    } else {
                        p.textContent = "you lose";
                        document.querySelector("header p").textContent -= 1;
                        button.style.color = "hsl(349, 70%, 56%)";
                    }
                }
                document.querySelector(".result .img:first-child").after(p);
                document.querySelector(".result > p").after(button);
                if(p.textContent.includes("draw") && innerWidth <= "767")
                    p.style.left = "37%"
                if(p.textContent.includes("lose") && innerWidth <= "767")
                    p.style.left = "25%"
            }
        },1000);

        

        ele.parentElement.style.left = "-82%";
        if(innerWidth <= "767" )
            ele.parentElement.style.left = "-109%";
        document.querySelector(".result").style.left = "50%";

        var img = ele.cloneNode(true);
        img.style.border = "22px solid";
        if(innerWidth <= "767")
            img.style.border = "16px solid";
        img.style.borderColor = getComputedStyle(ele).borderBlockColor;
        img.style.boxShadow = getComputedStyle(ele).boxShadow;
        document.querySelector(".result").prepend(img);

        setTimeout(() => {
            button.style.height = "auto";
            button.style.padding = getComputedStyle(document.querySelector("body > button")).padding;
        }, 5000);

        button.addEventListener("click", function() {
            ele.parentElement.style.left = "0%";
            document.querySelector(".result").style.left = "150%";
            setTimeout(function() {
                document.querySelector(".result > button").remove();
                document.querySelector(".result").firstElementChild.remove();
                document.querySelector(".result").lastElementChild.remove();
                document.querySelector(".result p").remove();
            },500);
        })
    }
});