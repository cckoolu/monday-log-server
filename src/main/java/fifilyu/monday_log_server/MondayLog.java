package fifilyu.monday_log_server;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.PrintWriter;
import java.io.StringWriter;

@SuppressWarnings(value = "unused")
public class MondayLog {
    private final Logger logger;

    /**
     * 将异常堆栈信息转为字符串
     */
    private static String stackTracetoString(Exception e) {
        StringWriter errors = new StringWriter();
        e.printStackTrace(new PrintWriter(errors));
        return errors.toString();
    }

    public MondayLog() {
        this.logger = LoggerFactory.getLogger(MondayLog.class);
    }

    public MondayLog(Class<?> clazz) {
        this.logger = LoggerFactory.getLogger(clazz);
    }

    public void enterFunc(String location, String funcName) {
        logger.trace(String.format("%s|Enter function: %s", location, funcName));
    }

    public void exitFunc(String location, String funcName) {
        logger.trace(String.format("%s|Exit function: %s", location, funcName));
    }

    public <T> void var(String location, String name, T value) {
        logger.trace(String.format("%s|var->%s=%s", location, name, value));
    }

    public <T> void input(String location, String name, T value) {
        logger.trace(String.format("%s|input->%s=%s", location, name, value));
    }

    public <T> void output(String location, String name, T value) {
        logger.trace(String.format("%s|output->%s=%s", location, name, value));
    }

    public void error(String location, String s) {
        logger.error(location + "|" + s);
    }

    public void warn(String location, String s) {
        logger.warn(location + "|" + s);
    }

    public void info(String location, String s) {
        logger.info(location + "|" + s);
    }

    public void debug(String location, String s) {
        logger.debug(location + "|" + s);
    }

    public void trace(String location, String s) {
        logger.trace(location + "|" + s);
    }

    public void error(String location, Exception e) {
        logger.error(location + "|" + stackTracetoString(e));
    }
}
